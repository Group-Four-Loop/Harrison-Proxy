const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 7777;
app.use(cors());

app.get('/items', (req, res, next)=> {
  if (req.query.item_id) {
    res.redirect(`http://localhost:8080/items/?item_id=${req.query.item_id}`);
  } else {
  res.redirect('http://localhost:8080/items');
  }
})

app.get('/itemphoto', (req, res)=> {
  res.redirect('http://localhost:1234/itemphoto');
})

app.get('/api/looks', (req, res)=> {
  res.redirect('http://localhost:3000/api/looks');
})

app.use(express.static(__dirname + '/'));
app.listen(port, () => {
  console.log('Proxy listening on port ' + port);
})