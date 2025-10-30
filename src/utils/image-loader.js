// A simple no-op image loader for static exports
module.exports = function imageLoader({ src, width, quality }) {
  // Return the original source for static exports
  return src;
};
