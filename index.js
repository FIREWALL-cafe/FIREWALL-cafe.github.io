const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { getGoogleImages, getBaiduImages, getDetectedLanguage, getSearchImages, getSearchesByTerm, getSearchesFilter, getTranslation, postVote, saveImages } = require('./server/fetch');
const postmark = require('postmark');
const serverConfig = require('./server/config');

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

app.post("/searches/:search_id/images", async (req, res) => {
  console.log('/searches/:search_id/images:', req.params);
  console.log("trying to get images for search id", req.params.search_id);
  const { search_id } = req.params;

  const data = await getSearchImages(search_id);

  res.json(data);
});

app.post('/images', async (req, res) => {
  const data = {};
  let langTo;
  const { query, search_client_name } = req.body;
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

    const { searchId } = await saveImages({ query, google: results[0].slice(0, 5), baidu: results[1].slice(0, 5), langTo, langFrom, search_client_name, translation: translatedQuery })

    data.searchId = searchId;
    data.googleResults = results[0];
    data.baiduResults = results[1];
    data.translation = translatedQuery
  } catch (error) {
    console.error(error);
  }

  res.json(data);
});

app.post('/searches', async (req, res) => {
  const { query } = req.query;
  const filterOptions = req.query;

  console.log('/searches params:', req.query);
  console.log('/searches body:', req.body);
  const data =  query ? await getSearchesByTerm(query) : await getSearchesFilter(filterOptions);

  res.json(data);
});

app.post('/vote', async (req, res) => {
  let totalVotes = 0;
  console.log('/vote:', req.body);
  
  try {
    req.body.vote_ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    totalVotes = await postVote({ ...req.body });
  } catch (e) {
    console.error(e);
  }

  res.json({ meta_key: req.body.meta_key, totalVotes });
});

app.post('/send-email', async (req, res) => {
  console.log('/send-email: trying!', req.body);
  const { to, subject, text } = req.body;
  const client = new postmark.ServerClient(serverConfig.postmarkApiKey);

  try {
    await client.sendEmail({
      From: 'info@firewallcafe.com',
      To: to,
      Subject: subject,
      TextBody: text
    });

    console.log('Email sent successfully:', { to, subject, text });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

module.exports = app;
