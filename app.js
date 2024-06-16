const path = require('path');
const express = require('express');
const app = express();
const port = 6600;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
})
