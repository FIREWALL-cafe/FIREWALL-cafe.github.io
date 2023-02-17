const axios = require('axios');
const cheerio = require('cheerio');

const getGoogleImageSrcs = (results) => {
  const html = cheerio.load(results);
  const imgs = html('.yWs4tf').toArray().slice(0, 10);
  return imgs.map((img) => img.attribs.src)
};

const getBaiduImageSrcs = (results) => {
  const html = cheerio.load(results)
  const data = html('script')
    ?.toArray()
    ?.filter(e => e?.attribs?.id?.startsWith('atom-data'))
    ?.[0]
    ?? {};
  const inner = html(data).html();
  const { data: { images } } = JSON.parse(inner);
  return images
    .slice(0, 10)
    // .map(img => img?.objurl);
    .map(img => img?.thumburl);
}

const getGoogleImages = async (query) => {
  const url = `https://www.google.com/search?q=${encodeURI(query)}&tbm=isch`;

  const response = await axios.get(url)
  return getGoogleImageSrcs(response.data);
};

const getBaiduImages = async (query) => {
  const url = `https://image.baidu.com/search/index?tn=baiduimage&word=${encodeURI(query)}`

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36 EdgA/46.1.2.5140',
    },
  };

  const response = await fetch(url, config);
  const body = await response.text();
  return getBaiduImageSrcs(body);
};

module.exports = {
  getGoogleImages,
  getBaiduImages,
}
