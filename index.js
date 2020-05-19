const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 7777;
app.use(cors());

app.get('/shoppingcart', (req, res)=> {
  if (req.query.item_id) {
    res.redirect(`http://13.57.207.50:3333/shoppingcart/?item_id=${req.query.item_id}`);
  } else {
  res.redirect('http://13.57.207.50:3333/shoppingcart');
  }
})

app.get('/items', (req, res)=> {
  res.redirect('http://54.219.237.16:1235/items');
})

app.get('/api/looks', (req, res)=> {
  res.redirect('http://3.101.47.20:3000/api/looks');
})

app.use(express.static(__dirname + '/'));
app.listen(port, () => {
  console.log('Proxy listening on port ' + port);
})