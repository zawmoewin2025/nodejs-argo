const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server is active and Vless is running!');
});

app.listen(3000, () => {
  console.log('Keep-alive server is running on port 3000');
});
