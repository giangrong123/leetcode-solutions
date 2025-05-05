const urlMap = new Map();
let id = 0;
const baseUrl = "http://tinyurl.com/";
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const shortCode = id.toString(36);
    const shortUrl = baseUrl + shortCode;
    
    urlMap.set(shortCode, longUrl);
    id += 1;

    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const shortCode = shortUrl.replace(baseUrl, "");
  return urlMap.get(shortCode);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
