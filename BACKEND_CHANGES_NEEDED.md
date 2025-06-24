# Backend Changes Required for IP Tracking

## Issue
The `saveSearchAndImages` endpoint in `/Users/ummonai/dev/firewall/server/api/queries.js` is not properly handling the `search_ip_address` field, causing all searches to be saved with `search_ip_address: null`.

## Required Changes

### File: `/Users/ummonai/dev/firewall/server/api/queries.js`

#### 1. Update the destructuring assignment to include `search_ip_address`:

```javascript
const saveSearchAndImages = async (request, response) => {
    const {
        timestamp,
        location,
        search_client_name,
        search_ip_address,  // ADD THIS LINE
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
    console.log(`[IP address received: ${search_ip_address}]`);  // ADD THIS LINE
```

#### 2. Update the SQL INSERT query to include `search_ip_address`:

```javascript
const searchQuery = `INSERT INTO searches (
    search_timestamp,
    search_client_name,
    search_ip_address,          // ADD THIS LINE
    search_engine_initial,
    search_engine_translation,
    search_term_initial,
    search_term_initial_language_code,
    search_term_translation,
    search_term_status_banned,
    search_term_status_sensitive,
    search_location
) VALUES (
    $1,  $2,  $3,  $4,  $5,  $6,  $7,  $8,  $9, $10, $11  // UPDATE: $10 -> $11
) RETURNING search_id`;
```

#### 3. Update the searchValues array to include the IP address:

```javascript
const searchValues = [
    timestamp,
    search_client_name,
    search_ip_address,  // ADD THIS LINE
    search_engine,
    search_engine === 'google' ? 'baidu' : 'google',
    search,
    lang_from,
    translation,
    banned ? banned : false,
    sensitive ? sensitive : false,
    location,
];
```

## Database Schema Verification

✅ The database schema already supports IP tracking:
- `searches` table has `search_ip_address text` column
- `have_votes` table has `vote_ip_address text` column
- Indexes are already created for both IP address columns

## Testing

After applying these changes:
1. New searches should save IP addresses correctly
2. Recent Activity dashboard should show IP addresses
3. Check server logs for the debug message: `[IP address received: x.x.x.x]`

## Status

- ✅ Frontend IP capture working
- ✅ Frontend IP display working  
- ✅ Database schema ready
- ❌ Backend saveSearchAndImages function needs updating (this document)
- ❌ Backend deployment needed