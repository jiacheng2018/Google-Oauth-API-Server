const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./Config/key');
require('./Model/User');
require('./Services/passport');
//client_id
//214420770396-0j12pg6up9cm9pgmk7vi2qvthafesqom.apps.googleusercontent.com
// client secret
// oglZVICUvufdc1ZU3semV3rf
mongoose.connect(keys.MongoURI);
const app = express();
app.use(
          cookieSession({
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                    keys: [keys.cookieKey]
          })
);
app.use(passport.initialize());
app.use(passport.session());
require('./Routes/AuthRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
