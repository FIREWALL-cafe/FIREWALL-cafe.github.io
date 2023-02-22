const axios = require('axios');
const cheerio = require('cheerio');
const serverConfig = require('./config');

const getTranslationUrl = endpoint => `https://babelfish.firewallcafe.com/${endpoint}`;

const fetchResponseJson = async (url, config = {}) => {
  const response = await fetch(url, config);
  const body = await response.json();
  return body;
}

const fetchResponseText = async (url, config = {}) => {
  const response = await fetch(url, config);
  const body = await response.text();
  return body;
}

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

  const body = await fetchResponseText(url, config);
  return getBaiduImageSrcs(body);
};

const getDetectedLanguage = async (query) => {
  const body = await fetchResponseJson(getTranslationUrl(`detect-language?query=${query}`));
  return body;
}

const getTranslation = async (query, langFrom, langTo) => {
  const config = {
    method: 'POST',
    url: getTranslationUrl('translate'),
    // write data as a query string because that's what babelfish expects
    data: `query=${query}&searchEngine=google&secret=${serverConfig.sharedSecret}&langFrom=${langFrom}&langTo=${langTo}`,
    // {
    //   query,
    //   searchEngine: 'google',
    //   secret: serverConfig.sharedSecret,
    //   langFrom,
    //   langTo
    // },
  };

  // use axios because bablefish expects the data key to be present
  const response = await axios(config);
  const { translated } = response.data;
  return translated;
}

module.exports = {
  getGoogleImages,
  getBaiduImages,
  getDetectedLanguage,
  getTranslation
};
