const express = require('express');
// const passport = require('passport');
// const googleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
app.get('/', (req, res) => {
          res.send({ hi: 'you are good' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
