# Real-time IP Geolocation Implementation Guide

## Phase 1: Database Schema Updates

### 1.1 Create Migration SQL File

Create `/Users/ummonai/dev/firewall/server/api/migrations/2_add_geolocation_columns.sql`:

```sql
-- Add geographic columns to searches table
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_country VARCHAR(100);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_country_code VARCHAR(2);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_region VARCHAR(100);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_city VARCHAR(100);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_latitude DECIMAL(10, 8);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_longitude DECIMAL(11, 8);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_timezone VARCHAR(50);
ALTER TABLE searches ADD COLUMN IF NOT EXISTS search_isp VARCHAR(200);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_searches_country ON searches(search_country);
CREATE INDEX IF NOT EXISTS idx_searches_city ON searches(search_city);
CREATE INDEX IF NOT EXISTS idx_searches_country_code ON searches(search_country_code);

-- Add geographic columns to have_votes table
ALTER TABLE have_votes ADD COLUMN IF NOT EXISTS vote_country VARCHAR(100);
ALTER TABLE have_votes ADD COLUMN IF NOT EXISTS vote_country_code VARCHAR(2);
ALTER TABLE have_votes ADD COLUMN IF NOT EXISTS vote_region VARCHAR(100);
ALTER TABLE have_votes ADD COLUMN IF NOT EXISTS vote_city VARCHAR(100);
ALTER TABLE have_votes ADD COLUMN IF NOT EXISTS vote_latitude DECIMAL(10, 8);
ALTER TABLE have_votes ADD COLUMN IF NOT EXISTS vote_longitude DECIMAL(11, 8);

-- Create IP geolocation cache table
CREATE TABLE IF NOT EXISTS ip_geolocation_cache (
  ip_address VARCHAR(45) PRIMARY KEY,
  country VARCHAR(100),
  country_code VARCHAR(2),
  region VARCHAR(100),
  city VARCHAR(100),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  timezone VARCHAR(50),
  isp VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add index on cache table for cleanup queries
CREATE INDEX IF NOT EXISTS idx_ip_cache_updated ON ip_geolocation_cache(updated_at);
```

## Phase 2: Backend Implementation

### 2.1 Create IP Geolocation Service

Create `/Users/ummonai/dev/firewall/server/api/services/ipGeolocation.js`:

```javascript
const axios = require('axios');
const { pool } = require('../config');

class IPGeolocationService {
  constructor() {
    this.memoryCache = new Map();
    this.API_URL = 'http://ip-api.com/json/';
    this.cacheTimeout = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    this.maxMemoryCacheSize = 1000; // Limit memory usage
  }
  
  async getLocation(ip) {
    // Validate IP
    if (!ip || ip === 'null' || ip === 'undefined') {
      console.log('Invalid IP for geolocation:', ip);
      return null;
    }
    
    // Skip private/local IPs
    if (this.isPrivateIP(ip)) {
      console.log('Skipping private IP:', ip);
      return null;
    }
    
    // Check memory cache first (fastest)
    if (this.memoryCache.has(ip)) {
      console.log('IP found in memory cache:', ip);
      return this.memoryCache.get(ip);
    }
    
    // Check database cache
    const dbCache = await this.getFromDBCache(ip);
    if (dbCache) {
      console.log('IP found in database cache:', ip);
      this.addToMemoryCache(ip, dbCache);
      return dbCache;
    }
    
    // Fetch from API
    try {
      console.log('Fetching IP from API:', ip);
      const response = await axios.get(`${this.API_URL}${ip}`, {
        timeout: 5000 // 5 second timeout
      });
      
      if (response.data.status === 'success') {
        const geoData = {
          country: response.data.country,
          countryCode: response.data.countryCode,
          region: response.data.regionName,
          city: response.data.city,
          latitude: response.data.lat,
          longitude: response.data.lon,
          timezone: response.data.timezone,
          isp: response.data.isp
        };
        
        // Save to both caches
        await this.saveToDBCache(ip, geoData);
        this.addToMemoryCache(ip, geoData);
        
        return geoData;
      } else {
        console.error('IP geolocation failed:', response.data);
        return null;
      }
    } catch (error) {
      console.error('IP geolocation error for', ip, ':', error.message);
      return null;
    }
  }
  
  isPrivateIP(ip) {
    // Check for common private IP ranges
    return ip.startsWith('10.') || 
           ip.startsWith('172.') || 
           ip.startsWith('192.168.') ||
           ip === '127.0.0.1' ||
           ip === '::1';
  }
  
  addToMemoryCache(ip, geoData) {
    // Implement LRU-style cache to limit memory usage
    if (this.memoryCache.size >= this.maxMemoryCacheSize) {
      // Remove oldest entry
      const firstKey = this.memoryCache.keys().next().value;
      this.memoryCache.delete(firstKey);
    }
    this.memoryCache.set(ip, geoData);
  }
  
  async getFromDBCache(ip) {
    try {
      const query = `
        SELECT country, country_code, region, city, 
               latitude, longitude, timezone, isp
        FROM ip_geolocation_cache 
        WHERE ip_address = $1 
        AND updated_at > NOW() - INTERVAL '7 days'
      `;
      const result = await pool.query(query, [ip]);
      
      if (result.rows.length > 0) {
        const row = result.rows[0];
        return {
          country: row.country,
          countryCode: row.country_code,
          region: row.region,
          city: row.city,
          latitude: parseFloat(row.latitude),
          longitude: parseFloat(row.longitude),
          timezone: row.timezone,
          isp: row.isp
        };
      }
      return null;
    } catch (error) {
      console.error('Database cache error:', error);
      return null;
    }
  }
  
  async saveToDBCache(ip, geoData) {
    try {
      const query = `
        INSERT INTO ip_geolocation_cache 
        (ip_address, country, country_code, region, city, 
         latitude, longitude, timezone, isp)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (ip_address) 
        DO UPDATE SET 
          country = $2, 
          country_code = $3, 
          region = $4, 
          city = $5,
          latitude = $6, 
          longitude = $7, 
          timezone = $8, 
          isp = $9,
          updated_at = CURRENT_TIMESTAMP
      `;
      
      await pool.query(query, [
        ip,
        geoData.country,
        geoData.countryCode,
        geoData.region,
        geoData.city,
        geoData.latitude,
        geoData.longitude,
        geoData.timezone,
        geoData.isp
      ]);
    } catch (error) {
      console.error('Failed to save to DB cache:', error);
    }
  }
  
  // Cleanup old cache entries
  async cleanupCache() {
    try {
      const query = `
        DELETE FROM ip_geolocation_cache 
        WHERE updated_at < NOW() - INTERVAL '30 days'
      `;
      const result = await pool.query(query);
      console.log(`Cleaned up ${result.rowCount} old cache entries`);
    } catch (error) {
      console.error('Cache cleanup error:', error);
    }
  }
}

// Export singleton instance
module.exports = new IPGeolocationService();
```

### 2.2 Update Backend Save Functions

#### Update `/Users/ummonai/dev/firewall/server/api/queries.js`:

Add import at the top:
```javascript
const ipGeolocationService = require('./services/ipGeolocation');
```

Update `saveSearchAndImages` function:
```javascript
const saveSearchAndImages = async (request, response) => {
    const {
        timestamp,
        location,
        search_client_name,
        search_ip_address,
        secret,
        search_engine,
        search,
        translation,
        lang_from,
        lang_to,
        lang_confidence,
        lang_alternate,
        lang_name,
        google_images,
        baidu_images,
        banned,
        sensitive,
    } = request.body;
    
    console.log(`[saveSearchAndImages for ${search_engine}]`);
    console.log(`[IP address received: ${search_ip_address}]`);
    
    // Start geolocation in parallel
    const geoPromise = search_ip_address 
        ? ipGeolocationService.getLocation(search_ip_address)
        : Promise.resolve(null);
    
    // Updated query with geolocation columns
    const searchQuery = `INSERT INTO searches (
        search_timestamp,
        search_client_name,
        search_ip_address,
        search_country,
        search_country_code,
        search_region,
        search_city,
        search_latitude,
        search_longitude,
        search_timezone,
        search_isp,
        search_engine_initial,
        search_engine_translation,
        search_term_initial,
        search_term_initial_language_code,
        search_term_translation,
        search_term_status_banned,
        search_term_status_sensitive,
        search_location
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19
    ) RETURNING search_id`;
    
    // Wait for geolocation to complete
    const geoData = await geoPromise;
    if (geoData) {
        console.log(`[Geolocation successful for ${search_ip_address}:`, 
            `${geoData.city}, ${geoData.country}]`);
    }
    
    const searchValues = [
        timestamp,
        search_client_name,
        search_ip_address,
        geoData?.country || null,
        geoData?.countryCode || null,
        geoData?.region || null,
        geoData?.city || null,
        geoData?.latitude || null,
        geoData?.longitude || null,
        geoData?.timezone || null,
        geoData?.isp || null,
        search_engine,
        search_engine === 'google' ? 'baidu' : 'google',
        search,
        lang_from,
        translation,
        banned ? banned : false,
        sensitive ? sensitive : false,
        location,
    ];
    
    // Continue with rest of function...
```

Update `createVote` function similarly:
```javascript
const createVote = async (request, response) => {
    const { vote_id, search_id, vote_timestamp, vote_client_name, vote_ip_address } = request.body;
    console.log("createVote:", vote_id, search_id, vote_timestamp, vote_client_name, vote_ip_address);
    
    // Start geolocation in parallel
    const geoPromise = vote_ip_address 
        ? ipGeolocationService.getLocation(vote_ip_address)
        : Promise.resolve(null);
    
    // Wait for geolocation
    const geoData = await geoPromise;
    
    const query = `INSERT INTO have_votes (
        vote_id, search_id, vote_timestamp, vote_client_name, vote_ip_address,
        vote_country, vote_country_code, vote_region, vote_city, 
        vote_latitude, vote_longitude
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
    
    const values = [
        vote_id, 
        search_id, 
        vote_timestamp, 
        vote_client_name, 
        vote_ip_address,
        geoData?.country || null,
        geoData?.countryCode || null,
        geoData?.region || null,
        geoData?.city || null,
        geoData?.latitude || null,
        geoData?.longitude || null
    ];
    
    // Continue with query execution...
```

### 2.3 Update Analytics Endpoints

Update `getGeographicAnalytics` in queries.js:
```javascript
const getGeographicAnalytics = (request, response) => {
    const query = `
        SELECT 
            search_country as country,
            search_country_code as country_code,
            COUNT(*) as search_count,
            ROUND(
                (COUNT(*) * 100.0 / (SELECT COUNT(*) FROM searches WHERE search_country IS NOT NULL)), 
                1
            ) as percentage
        FROM searches 
        WHERE search_country IS NOT NULL
        AND search_timestamp > (EXTRACT(EPOCH FROM NOW()) - 2592000) * 1000 -- Last 30 days
        GROUP BY search_country, search_country_code
        ORDER BY search_count DESC 
        LIMIT 20
    `;
    
    pool.query(query, (error, results) => {
        if (error) {
            console.error('Geographic analytics query error:', error);
            response.status(500).json(error);
        } else {
            console.log('Geographic analytics results:', results.rows.length, 'countries');
            response.status(200).json(results.rows);
        }
    });
}
```

Add new city-level analytics endpoint:
```javascript
const getCityAnalytics = (request, response) => {
    const { country } = request.query;
    
    let query = `
        SELECT 
            search_city as city,
            search_region as region,
            COUNT(*) as search_count
        FROM searches 
        WHERE search_city IS NOT NULL
        AND search_timestamp > (EXTRACT(EPOCH FROM NOW()) - 2592000) * 1000 -- Last 30 days
    `;
    
    const params = [];
    if (country) {
        query += ` AND search_country_code = $1`;
        params.push(country);
    }
    
    query += `
        GROUP BY search_city, search_region
        ORDER BY search_count DESC 
        LIMIT 20
    `;
    
    pool.query(query, params, (error, results) => {
        if (error) {
            console.error('City analytics query error:', error);
            response.status(500).json(error);
        } else {
            response.status(200).json(results.rows);
        }
    });
}
```

### 2.4 Update server.js Routes

Add to `/Users/ummonai/dev/firewall/server/api/server.js`:
```javascript
app.get('/analytics/cities', db.getCityAnalytics)
```

### 2.5 Export Functions

Add to module.exports in queries.js:
```javascript
getCityAnalytics,
```

## Phase 3: Testing

### 3.1 Test IP Geolocation Service

Create `/Users/ummonai/dev/firewall/server/api/test/testIpGeolocation.js`:
```javascript
const ipGeolocationService = require('../services/ipGeolocation');

async function test() {
    console.log('Testing IP Geolocation Service...\n');
    
    // Test valid IPs
    const testIPs = [
        '8.8.8.8',        // Google DNS
        '1.1.1.1',        // Cloudflare
        '208.67.222.222', // OpenDNS
    ];
    
    for (const ip of testIPs) {
        console.log(`\nTesting IP: ${ip}`);
        const result = await ipGeolocationService.getLocation(ip);
        console.log('Result:', result);
    }
    
    // Test cache
    console.log('\n\nTesting cache (should be instant):');
    const start = Date.now();
    await ipGeolocationService.getLocation('8.8.8.8');
    console.log(`Cache lookup took: ${Date.now() - start}ms`);
    
    process.exit(0);
}

test().catch(console.error);
```

### 3.2 Historical Data Backfill Script

Create `/Users/ummonai/dev/firewall/server/api/scripts/backfillGeolocation.js`:
```javascript
const ipGeolocationService = require('../services/ipGeolocation');
const { pool } = require('../config');

async function backfillGeolocation(limit = 1000) {
    console.log('Starting geolocation backfill...\n');
    
    // Get searches with IP but no geographic data
    const query = `
        SELECT search_id, search_ip_address 
        FROM searches 
        WHERE search_ip_address IS NOT NULL 
        AND search_ip_address != 'null'
        AND search_country IS NULL
        ORDER BY search_timestamp DESC
        LIMIT $1
    `;
    
    const { rows } = await pool.query(query, [limit]);
    console.log(`Found ${rows.length} searches to process\n`);
    
    if (rows.length === 0) {
        console.log('No searches need geolocation!');
        return;
    }
    
    const BATCH_SIZE = 40; // Stay under rate limit
    let processed = 0;
    let successful = 0;
    
    for (let i = 0; i < rows.length; i += BATCH_SIZE) {
        const batch = rows.slice(i, i + BATCH_SIZE);
        console.log(`\nProcessing batch ${Math.floor(i / BATCH_SIZE) + 1}...`);
        
        const results = await Promise.all(
            batch.map(async (search) => {
                try {
                    const geoData = await ipGeolocationService.getLocation(search.search_ip_address);
                    
                    if (geoData) {
                        await pool.query(`
                            UPDATE searches 
                            SET search_country = $1, 
                                search_country_code = $2, 
                                search_region = $3, 
                                search_city = $4,
                                search_latitude = $5, 
                                search_longitude = $6,
                                search_timezone = $7,
                                search_isp = $8
                            WHERE search_id = $9
                        `, [
                            geoData.country,
                            geoData.countryCode,
                            geoData.region,
                            geoData.city,
                            geoData.latitude,
                            geoData.longitude,
                            geoData.timezone,
                            geoData.isp,
                            search.search_id
                        ]);
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.error(`Failed to process search ${search.search_id}:`, error.message);
                    return false;
                }
            })
        );
        
        successful += results.filter(r => r).length;
        processed += batch.length;
        
        console.log(`Processed: ${processed}/${rows.length} (${successful} successful)`);
        
        // Wait 60 seconds between batches to respect rate limit
        if (i + BATCH_SIZE < rows.length) {
            console.log('Waiting 60 seconds for rate limit...');
            await new Promise(resolve => setTimeout(resolve, 60000));
        }
    }
    
    console.log(`\nBackfill complete! Successfully geolocated ${successful} out of ${processed} searches.`);
    
    // Cleanup old cache entries
    await ipGeolocationService.cleanupCache();
}

// Run with command line argument for limit
const limit = process.argv[2] ? parseInt(process.argv[2]) : 1000;
backfillGeolocation(limit)
    .then(() => process.exit(0))
    .catch(error => {
        console.error('Backfill failed:', error);
        process.exit(1);
    });
```

## Phase 4: Frontend Updates

Update the GeographicInsights component to show country flags and better formatting:

```javascript
// Add country code to flag emoji mapping
const getCountryFlag = (countryCode) => {
    if (!countryCode) return '🌍';
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};

// Update chart data to include flags
const chartData = {
    labels: data.map(item => `${getCountryFlag(item.country_code)} ${item.country}`),
    // ... rest of chart config
};
```

## Deployment Checklist

1. **Database Migration**
   - [ ] Run migration script to add columns
   - [ ] Verify all columns created successfully

2. **Backend Deployment**
   - [ ] Deploy ipGeolocation.js service
   - [ ] Update queries.js with new functions
   - [ ] Update server.js with new routes
   - [ ] Test geolocation service

3. **Testing**
   - [ ] Test new search saves with geolocation
   - [ ] Test vote saves with geolocation
   - [ ] Verify analytics endpoints work

4. **Historical Data**
   - [ ] Run backfill script for recent data
   - [ ] Monitor rate limits during backfill

5. **Frontend**
   - [ ] Update GeographicInsights component
   - [ ] Test dashboard displays correctly

## Monitoring

Add logging to track geolocation performance:
```javascript
// Log success rate
console.log('[GeoLocation Stats]', {
    requests: this.totalRequests,
    cacheHits: this.cacheHits,
    apiCalls: this.apiCalls,
    failures: this.failures
});
```

## Next Steps

1. Run database migration
2. Deploy backend changes
3. Test with a few searches
4. Run backfill for historical data
5. Update frontend components