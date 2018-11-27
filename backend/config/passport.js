const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (username, password, done) => {
  /* User.findOne({ username: username }, function (err, user) {
   if (err) { return done(err); }
   if (!user) {
   return done(null, false, { message: 'Incorrect username.' });
   }
   if (!user.validPassword(password)) {
   return done(null, false, { message: 'Incorrect password.' });
   }
   return done(null, user);
   }); */
  console.log('Passport Local');
  return done(null, 123);
}));

passport.serializeUser((user, done) => {
  /* done(null, user.id); */
  console.log('Serialize', user);
  done(null, { n: 2 });
});

passport.deserializeUser((id, done) => {
  /* User.findById(id, function(err, user) {
   done(err, user);
   }); */
  console.log('Deserialize');
  done(null, { name: 'Sergey' });
});
