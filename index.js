const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { getGoogleImages, getBaiduImages } = require('./server/fetchImages');

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

app.post('/results', async (req, res) => {
  let params = {};
  const { EN: enQuery, CN: cnQuery } = req.body;

  try {
    const results = await Promise.all([
      getGoogleImages(enQuery),
      getBaiduImages(cnQuery),
    ]);

    params.googleResults = results[0];
    params.baiduResults = results[1];
  } catch (error) {
    console.log(error);
  }

  res.json(params);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

module.exports = app;