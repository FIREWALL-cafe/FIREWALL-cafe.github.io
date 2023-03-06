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

/**
 * Fetches images from Google based on a provided query string
 * @param {string} query 
 * @returns array of image urls from Google
 */
const getGoogleImages = async (query) => {
  const url = `https://www.google.com/search?q=${encodeURI(query)}&tbm=isch`;

  const response = await axios.get(url)
  return getGoogleImageSrcs(response.data) || [];
};

/**
 * Fetches images from Baidu based on a provided query string
 * @param {string} query 
 * @returns array of image urls from Baidu 
 */
const getBaiduImages = async (query) => {
  const url = `https://image.baidu.com/search/index?tn=baiduimage&word=${encodeURI(query)}`

  const config = {
    cache: 'no-cache',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36 EdgA/46.1.2.5140',
      // Occasionally this Cookie needs to be set.
      // Regenerate a new one by making the request in Postman (don't forget to set the custom headers above).
      // Copy and paste the auto-populated Cookie value from the Headers tab here:
      'Cookie': 'BAIDUID=C35C2D2C00FDD3927D7E2C7A4D96F247:FG=1; BAIDUID_BFESS=C35C2D2C00FDD3927D7E2C7A4D96F247:FG=1; BDRCVFR[dG2JNJb_ajR]=mk3SLVN4HKm; BIDUPSID=C35C2D2C00FDD392F2414BEE62B793C8; H_PS_PSSID=36545_38113_38057_37907_38147_37989_38175_38172_37798_37924_26350_38120_38100_38008_37881; H_WISE_SIDS=219946_229967_219942_242489_110085_244252_244955_244267_242682_245674_246583_246905_246768_245042_246308_243424_247788_245540_248674_246801_248718_249015_248019_247552_248156_249498_249812_245672_244281_249921; H_WISE_SIDS_BFESS=219946_231498_240447_229967_239102_219942_241042_242489_242754_242543_242471_110085_243841_244252_244955_244267_241737_244446_245765_246095_246325_242682_243821_245674_246583_246613_243425_246905_246768; PSINO=7; PSTM=1676564876; X-Use-Search-BFF-SF=1; delPer=0'
    },
  };

  const body = await fetchResponseText(url, config);
  return getBaiduImageSrcs(body) || [];
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
