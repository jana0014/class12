const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Jana');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});