const express = require('express');
const axios = require('axios');

const App = express();

App.use(express.json()); // for parsing application/json
App.use(express.static(__dirname + '/dist')); // send page
App.set('query parser', true);

const PORT = process.env.PORT || 3030;

App.get('/get', (req, res) => {
  const url = req.query.url;
  if (!url) {
    res.status(400).send('Bad request');
    return;
  }
  axios(url)
    .then((data) => res.send(data.data))
    .catch((e) => {
      if (e.response) {
        res.status(e.response.status).send(e.response.data);
      }
    });
  // res.send('GOOOD');
});

App.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
