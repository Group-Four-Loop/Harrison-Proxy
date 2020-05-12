const express = require('express');
const app = express();
const port = 7777;

app.use(express.static(__dirname + '../index.html'));
app.listen(port, () => {
  console.log('Proxy listening on port ' + port);
})