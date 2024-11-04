const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { getGoogleImages, getBaiduImages, getDetectedLanguage, getTranslation, postVote, saveImages } = require('./server/fetch');
var spreadsheetServiceKey = require('./service-key.json');

const app = express();

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post('/images', async (req, res) => {
  const data = {};
  let langTo;
  const { query } = req.body;
  console.log('query', query)

  try {
    const { language: langFrom } = await getDetectedLanguage(query);
    console.log('langFrom', langFrom);
    langTo = 'zh-CN';
    const translatedQuery = await getTranslation(query, langFrom, langTo);
    const enQuery = langFrom === 'en' ? query : translatedQuery;
    const cnQuery = langFrom !== 'en' ? translatedQuery : query;

    const results = await Promise.all([
      getGoogleImages(enQuery),
      getBaiduImages(cnQuery),
    ]);

    // await saveImages({ query, google: results[0].slice(0, 5), baidu: results[1].slice(0, 5), langTo, langFrom, translation: translatedQuery })
    const { searchId } = { searchId: 1 };

    data.searchId = searchId;
    data.googleResults = results[0];
    data.baiduResults = results[1];
    data.translation = translatedQuery
  } catch (error) {
    console.error(error);
  }

  res.json(data);
});

app.post('/vote', async (req, res) => {
  let totalVotes = 0;

  try {
    totalVotes = await postVote({ ...req.body });
  } catch (e) {
    console.error(e);
  }

  res.json({ meta_key: req.body.meta_key, totalVotes });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

module.exports = app;
