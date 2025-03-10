const axios = require('axios');
const fetch = require('node-fetch')
const querystring = require('querystring');
const cheerio = require('cheerio');
const { getJson } = require("serpapi");
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
  // const html = cheerio.load(results);
  // const imgs = html('.DS1iW').toArray().slice(0, 9);
  // const imgs = html('div.H8Rx8c g-img img').toArray().slice(0, 9);
  // const imgs = html('div[jscontroller] a[jsname] img').toArray().slice(0, 9);
  return results.slice(0, 9).map((result) => result.original)
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
    .slice(0, 9)
    .map(img => img?.thumburl);
}

/**
 * Fetches images from Google based on a provided query string
 * @param {string} query 
 * @returns array of image urls from Google
 */
const getGoogleImages = async (query) => {
  console.log('fetching google images for', query);
  // const url = `https://www.google.com/search?q=${encodeURI(query)}&imgsz=qsvga&as_st=y&udm=2`;
  
  // const config = {
  //   cache: 'no-cache',
  //   headers: {
  //     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  //   }
  // };
  // const response = await axios.get(url, config)

  const params = {
    q: query,
    engine: "google_images",
    ijn: "0",
    api_key: serverConfig.serpApiKey,
  };

  const results = await getJson(params);
  // console.log(results["images_results"].slice(0, 1));
  
  return getGoogleImageSrcs(results["images_results"]) || [];
};

/**
 * Fetches images from Baidu based on a provided query string
 * @param {string} query 
 * @returns array of image urls from Baidu 
 */
const getBaiduImages = async (query) => {
  console.log('fetching baidu images for', query);
  const url = `https://image.baidu.com/search/index?tn=baiduimage&word=${encodeURI(query)}`;

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
  return await fetchResponseJson(getTranslationUrl(`detect-language?query=${query}`));
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

const postVote = async ({ meta_key, post_id, search_id, vote_client_name, vote_ip_address }) => {
  const url = `${serverConfig.apiUrl}vote`;
  const metaKeyToId = {
    votes_censored: 1,
    votes_uncensored: 2,
    votes_bad_translation: 3,
    votes_good_translation: 4,
    votes_lost_in_translation: 5,
    votes_bad_result: 6,
    votes_nsfw: 7,
  }

  const voteData = {
    vote_id: metaKeyToId[meta_key],
    search_id,
    vote_timestamp: Date.now(),
    vote_client_name: vote_client_name,
    secret: serverConfig.apiSecret,
    vote_ip_address: vote_ip_address,
  }

  console.log('vote data', voteData);

  const { data } = await axios.post(url, voteData);

  // const { data: wpData } = await axios.post(
  //   'https://firewallcafe.com/wp-admin/admin-ajax.php',
  //   querystring.stringify({
  //     action: 'fwc_post_vote',
  //     meta_key,
  //     post_id: `${post_id}`,
  //     security: '83376c1e81'
  //   })
  // );

  console.log('vote successful', data);

  return data;
}

const transformImgData = imgArray => JSON.stringify(imgArray.map(img => ({ href: img, src: img })));

const submitImagesToWordpress = async (data) => {
  const { data: responseData, response } = await axios.post(
    serverConfig.wordpressURL,
    { ...data, secret: serverConfig.wordpressSecret }
  );

  console.log('responseData', responseData, 'response', response);

  return { data: responseData, response };
}

const getSearchImages = async (search_id) => {
  console.log('search images for', search_id);

  const url = `${serverConfig.apiUrl}images/search_id/${search_id}`;
  const { data } = await axios.get(url);

  return data;
}

const getSearchesByTerm = async (query, options = {}) => {
  console.log('searches by term: starting: ', query);
  
  // Ensure pagination parameters are present
  const page = parseInt(options.page) || 1;
  const page_size = parseInt(options.page_size) || 25;
  
  // Add pagination and query to parameters
  const queryParams = {
    term: query,
    page,
    page_size,
    ...options
  };
  
  const url = `${serverConfig.apiUrl}searches/terms?${querystring.stringify(queryParams)}`;
  const { data } = await axios.get(url);

  console.log('searches by term: data count:', Array.isArray(data) ? data.length : 'paginated');

  // If the API doesn't return paginated data, we'll handle pagination here
  if (!data.total && Array.isArray(data)) {
    const total = data.length;
    const start = (page - 1) * page_size;
    const end = start + page_size;
    
    return {
      total,
      page,
      page_size,
      data: data.slice(start, end)
    };
  }

  return data;
}

const getSearchesFilter = async (filterOptions) => {
  console.log('FETCH.js: searches by filter: starting: ', filterOptions);
  
  // Ensure pagination parameters are present
  const page = parseInt(filterOptions.page) || 1;
  const page_size = parseInt(filterOptions.page_size) || 25;
  
  // Add pagination to query string
  const queryParams = {
    ...filterOptions,
    page,
    page_size
  };
  
  console.log('FETCH.js: filterOptions:', querystring.stringify(queryParams));
  const url = `${serverConfig.apiUrl}searches/filter?${querystring.stringify(queryParams)}`;

  const { data } = await axios.get(url);
  console.log('FETCH.js: searches by filter: data length:', data.length);

  // If the API doesn't return paginated data, we'll handle pagination here
  if (!data.total && Array.isArray(data)) {
    const total = data.length;
    const start = (page - 1) * page_size;
    const end = start + page_size;
    
    return {
      total,
      page,
      page_size,
      data: data.slice(start, end)
    };
  }

  return data;
}

const saveImages = async ({ query, google, baidu, langTo, langFrom, search_client_name, translation }) => {
  console.log('saving images for', query);
  console.log('- google images', google);
  console.log('- baidu images', baidu);
  
  const url = `${serverConfig.apiUrl}saveSearchAndImages`;
  const imageData = {
    timestamp: Date.now(),
    location: serverConfig.location,
    search_client_name: search_client_name,
    secret: serverConfig.apiSecret,
    search_engine: 'google',
    search: query,
    translation,
    lang_from: langFrom,
    lang_to: langTo,
    lang_confidence: '1.0',
    lang_alternate: null,
    lang_name: langFrom === 'en' ? 'English' : langFrom,
    banned: baidu.length === 0, // TODO: find a better way to identify banned terms
    sensitive: false,
    google_images: google, // transform array of url strings to objects
    baidu_images: baidu,
  };

  // submitImagesToWordpress(imageData);

  const { data } = await axios.post(
    url,
    imageData,
    {
      headers: {
        'Content-Type': 'application/json',
      }
  });

  console.log('archive action complete:', data);
  
  return data;
}

module.exports = {
  getGoogleImages,
  getBaiduImages,
  getDetectedLanguage,
  getSearchImages,
  getSearchesByTerm,
  getSearchesFilter,
  getTranslation,
  postVote,
  saveImages,
};
