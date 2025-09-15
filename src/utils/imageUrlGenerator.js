// Import config to check if proxy should be used
const config = require('../config');

/**
 * Generates a URL for an image, using proxy when configured or in production
 * @param {string} imageUrl - The original image URL
 * @param {boolean} isBaidu - Whether the image is from Baidu
 * @param {boolean} hasBaiduResults - Whether there are any Baidu results available
 * @param {string} censoredImage - The fallback image for censored content
 * @returns {string} The generated image URL
 */
export const generateImageUrl = (
  imageUrl,
  isBaidu = false,
  hasBaiduResults = true,
  censoredImage = null
) => {
  // Handle case where an object is passed instead of a string
  // This maintains backward compatibility with existing component code
  const url = typeof imageUrl === 'object' && imageUrl?.imageUrl ? imageUrl.imageUrl : imageUrl;

  if (isBaidu && !hasBaiduResults) {
    return censoredImage;
  }

  // Use proxy if configured or in production
  // This ensures images work correctly in Vercel dev environment
  if (config.proxyImages) {
    return `/proxy-image?url=${encodeURIComponent(url)}`;
  }

  // Only use direct URL if explicitly disabled
  return url;
};
