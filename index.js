const express = require('express');
// const passport = require('passport');
// const googleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
app.get('/', (req, res) => {
          res.send({ hi: 'you are good' });
});

app.listen(5000);
