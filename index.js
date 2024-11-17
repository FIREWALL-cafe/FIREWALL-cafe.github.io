const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { getGoogleImages, getBaiduImages, getDetectedLanguage, getSearchesByTerm, getTranslation, postVote, saveImages } = require('./server/fetch');
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

app.post('/searches', async (req, res) => {
  console.log('/searches:', req.query);
  const { query } = req.query;
  const data = await getSearchesByTerm(query);

  res.json(data);
});

app.post('/vote', async (req, res) => {
  let totalVotes = 0;
  console.log('/vote:', req.body);
  
  try {
    // req.body.vote_ip_address = req.ip;
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
