const map = new Map<string, string>();
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  const shortUrl = `http://tinyurl.com/${Math.floor(Math.random() * 1000000)}`;
  map.set(shortUrl, longUrl);
  return shortUrl;
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return map.get(shortUrl);
}

class CodecTinyURL {
  private character =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  public encode(id: number): string {
    let shortUrl = [];
    while (id > 0) {
      shortUrl.push(this.character[id % 62]);
      id = Math.floor(id / 62);
    }
    return shortUrl.reverse().join('');
  }

  public convertShortUrlToId(shortUrl: string): number {
    let id = 0;
    for (const c of shortUrl) {
      if ('a' <= c && c <= 'z') {
        id = id * 62 + c.charCodeAt(0) - 'a'.charCodeAt(0);
      }
      if ('A' <= c && c <= 'Z') {
        id = id * 62 + c.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
      }
      if ('0' <= c && c <= '9') {
        id = id * 62 + c.charCodeAt(0) - '0'.charCodeAt(0) + 52;
      }
    }
    return id;
  }
}
