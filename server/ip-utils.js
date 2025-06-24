/**
 * IP Address Extraction Utilities
 * 
 * Provides centralized IP extraction logic for the Firewall Cafe application
 * with support for various proxy configurations including Google App Engine
 */

/**
 * Extract client IP address from request object
 * 
 * Order of precedence:
 * 1. req.ip (Express's built-in IP detection when trust proxy is enabled)
 * 2. x-appengine-user-ip (Google App Engine specific header)
 * 3. x-forwarded-for (Standard proxy header, takes first IP if multiple)
 * 4. req.socket.remoteAddress (Direct connection fallback)
 * 
 * @param {Object} req - Express request object
 * @returns {string} Client IP address
 */
const getClientIp = (req) => {
  // When trust proxy is enabled, req.ip is the most reliable
  if (req.ip) {
    return req.ip;
  }
  
  // Google App Engine specific header
  if (req.headers['x-appengine-user-ip']) {
    return req.headers['x-appengine-user-ip'];
  }
  
  // Standard proxy header (may contain multiple IPs)
  if (req.headers['x-forwarded-for']) {
    // Take the first IP if multiple are present
    return req.headers['x-forwarded-for'].split(',')[0].trim();
  }
  
  // Direct connection fallback
  return req.socket.remoteAddress;
};

/**
 * Log IP extraction details for debugging
 * 
 * @param {Object} req - Express request object
 * @param {string} extractedIp - The IP that was extracted
 * @param {string} context - Context for the log (e.g., 'vote', 'search')
 */
const logIpExtraction = (req, extractedIp, context = '') => {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_IP) {
    console.log(`[IP Extraction${context ? ' - ' + context : ''}]`, {
      extracted: extractedIp,
      reqIp: req.ip,
      xAppEngineUserIp: req.headers['x-appengine-user-ip'],
      xForwardedFor: req.headers['x-forwarded-for'],
      remoteAddress: req.socket.remoteAddress,
      trustProxy: req.app.get('trust proxy')
    });
  }
};

/**
 * Express middleware to add clientIp property to all requests
 * 
 * Usage:
 * app.use(ipMiddleware);
 * 
 * Then access via req.clientIp in any route handler
 */
const ipMiddleware = (req, res, next) => {
  req.clientIp = getClientIp(req);
  
  // Log in development or when debugging
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_IP) {
    logIpExtraction(req, req.clientIp, 'middleware');
  }
  
  next();
};

/**
 * Validate if an IP address format is valid
 * 
 * @param {string} ip - IP address to validate
 * @returns {boolean} True if valid IP format
 */
const isValidIp = (ip) => {
  if (!ip) return false;
  
  // Basic IPv4 validation
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipv4Regex.test(ip)) {
    const parts = ip.split('.');
    return parts.every(part => {
      const num = parseInt(part, 10);
      return num >= 0 && num <= 255;
    });
  }
  
  // Basic IPv6 validation (simplified)
  const ipv6Regex = /^([\da-fA-F]{0,4}:){2,7}[\da-fA-F]{0,4}$/;
  return ipv6Regex.test(ip);
};

/**
 * Get IP location hint (for debugging)
 * This is a simple check to identify common proxy/internal IPs
 * 
 * @param {string} ip - IP address
 * @returns {string} Location hint
 */
const getIpLocationHint = (ip) => {
  if (!ip) return 'unknown';
  
  // Common internal/proxy ranges
  if (ip.startsWith('10.') || ip.startsWith('172.') || ip.startsWith('192.168.')) {
    return 'internal/proxy';
  }
  
  if (ip.startsWith('127.') || ip === '::1') {
    return 'localhost';
  }
  
  return 'external';
};

module.exports = {
  getClientIp,
  logIpExtraction,
  ipMiddleware,
  isValidIp,
  getIpLocationHint
};