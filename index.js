const express = require('express');
const app = express();
app.get('/', (req, res) => {
          res.send({ hi: 'you are good' });
});
app.listen(5000);
