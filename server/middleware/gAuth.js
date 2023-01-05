const passport= require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user, done)=>{
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID:"480351380868-e0m98ooduh0a7pml4d3gpjdi2tlmerlh.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:3000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));