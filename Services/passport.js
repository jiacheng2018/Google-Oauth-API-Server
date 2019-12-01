const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../Config/key');
const mongoose = require('mongoose');
const User = mongoose.model('User');
passport.serializeUser((User, done) => {
    done(null, User.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).then(User => {
        done(null, User);
    });
});
passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accesstoken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}).then(existingUser => {
        if (existingUser) {
            done(null, existingUser); // (error message, user record)
        } else {
            new User({googleId: profile.id}).save().then(user => done(null, user));
        }
    });
}));
