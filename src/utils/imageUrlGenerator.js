/**
 * Generates a URL for an image, using proxy in production and direct URL in development
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
  if (isBaidu && !hasBaiduResults) {
    return censoredImage;
  }

  // In production, use the proxy route
  if (process.env.NODE_ENV === 'production') {
    return `/proxy-image?url=${encodeURIComponent(imageUrl)}`;
  }

  // In development, use the direct URL
  return imageUrl;
};
