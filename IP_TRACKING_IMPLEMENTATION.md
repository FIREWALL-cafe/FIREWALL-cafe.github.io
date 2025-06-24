# IP Tracking Implementation Guide

This document describes the implementation of proper IP address tracking for the Firewall Cafe application, ensuring accurate client IP capture when deployed on Google App Engine.

## Problem Statement

The application was not correctly capturing client IP addresses for votes and searches when deployed on Google App Engine. The issue was caused by:

1. No Express trust proxy configuration
2. Incorrect header parsing order
3. Missing Google App Engine specific headers
4. No IP tracking for search operations

## Solution Overview

### 1. Express Trust Proxy Configuration

Added `app.set('trust proxy', true)` to enable Express to properly parse proxy headers:

```javascript
// Configure Express to trust proxy headers (required for Google App Engine)
app.set('trust proxy', true);
```

This configuration tells Express to:
- Trust X-Forwarded-* headers
- Populate `req.ip` with the real client IP
- Handle proxy chains correctly

### 2. IP Extraction Utility Module

Created `server/ip-utils.js` with centralized IP extraction logic:

```javascript
const getClientIp = (req) => {
  // Order of precedence:
  return req.ip ||                           // Express's built-in (most reliable)
         req.headers['x-appengine-user-ip'] || // Google App Engine specific
         req.headers['x-forwarded-for']?.split(',')[0] || // Standard proxy
         req.socket.remoteAddress;           // Direct connection fallback
};
```

### 3. IP Extraction Middleware

Added middleware to make client IP available on all requests:

```javascript
app.use(ipMiddleware); // Makes req.clientIp available in all routes
```

### 4. Updated Vote Tracking

Fixed vote IP tracking to use the middleware:

```javascript
app.post('/vote', async (req, res) => {
  req.body.vote_ip_address = req.clientIp;
  // ... rest of vote handling
});
```

### 5. Added Search IP Tracking

Updated search operations to track IP addresses:

```javascript
const { searchId } = await saveImages({ 
  query, 
  google: results[0].slice(0, 9), 
  baidu: results[1].slice(0, 9), 
  langTo, 
  langFrom, 
  search_client_name, 
  search_ip_address: req.clientIp,  // NEW: IP tracking
  translation: translatedQuery 
});
```

## Testing Guide

### Local Development Testing

1. **Test with mock headers**:
```bash
curl -X POST http://localhost:8080/vote \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 123.123.123.123" \
  -d '{"search_id": 1, "meta_key": "votes_censored"}'
```

2. **Check logs for IP extraction**:
```
Vote IP extracted: 123.123.123.123
```

### Google App Engine Testing

1. **Deploy to App Engine**:
```bash
gcloud app deploy
```

2. **Monitor logs**:
```bash
gcloud app logs tail
```

3. **Verify real IPs are captured**:
- Vote IPs should show real client addresses (not 10.x.x.x proxy IPs)
- Search operations should log client IPs

### Debug Mode

Enable detailed IP logging by setting environment variable:
```bash
DEBUG_IP=true npm run dev
```

This will log all IP-related headers and extraction details.

## API Changes

### Vote Endpoint
- **Endpoint**: `POST /vote`
- **Change**: Now automatically captures client IP as `vote_ip_address`
- **Backend expectation**: `vote_ip_address` field in request body

### Search Endpoint
- **Endpoint**: `POST /images`
- **Change**: Now includes `search_ip_address` in saveImages call
- **Backend expectation**: `search_ip_address` field in request body

## Troubleshooting

### Common Issues

1. **Still seeing proxy IPs (10.x.x.x)**:
   - Verify `trust proxy` is enabled
   - Check that middleware is added before routes
   - Ensure you're checking `req.clientIp` not `req.connection.remoteAddress`

2. **IP is undefined**:
   - Check middleware is properly imported and used
   - Verify headers are being sent by proxy
   - Use debug mode to inspect all headers

3. **Different IPs in development vs production**:
   - This is expected - localhost in dev, real IPs in production
   - Use header mocking to test in development

### Debugging Commands

```javascript
// Log all headers (add temporarily to any route)
console.log('All headers:', JSON.stringify(req.headers, null, 2));

// Check trust proxy setting
console.log('Trust proxy enabled:', req.app.get('trust proxy'));

// Use IP utility logging
const { logIpExtraction } = require('./server/ip-utils');
logIpExtraction(req, req.clientIp, 'debugging');
```

## Verification Checklist

- [ ] Express trust proxy is enabled
- [ ] IP middleware is added after body parser
- [ ] Vote endpoint uses `req.clientIp`
- [ ] Search endpoint passes IP to saveImages
- [ ] Logs show real client IPs (not proxy IPs)
- [ ] Backend receives IP addresses correctly
- [ ] Analytics can group by geographic location

## Future Enhancements

1. **IP Geolocation**: Add IP-to-location mapping for analytics
2. **Rate Limiting**: Implement per-IP rate limiting
3. **IP Anonymization**: Add option to hash last octet for privacy
4. **IPv6 Support**: Enhanced validation for IPv6 addresses

## References

- [Express Behind Proxies](https://expressjs.com/en/guide/behind-proxies.html)
- [Google App Engine Headers](https://cloud.google.com/appengine/docs/standard/nodejs/runtime#request_headers)
- [X-Forwarded-For Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)