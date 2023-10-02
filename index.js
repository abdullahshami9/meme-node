const express = require("express");
const session = require('express-session');
const passport = require('./oauth');
const path = require('path'); // Import the path module

const app = express();

const UserRoute = require('./routes/Route');
// app.use('/user', UserRoute);\

function isLoggedin(req, res, next){//middleware
    req.user ? next() : res.sendStatus(401);
}

app.use(passport.initialize());
app.get('/', (req, res) =>{
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.use(session({
    secret: 'lolsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
}));


app.get('/auth/google/failure', (req, res) => {
    res.send("Something went off");
});



    
    app.get('/auth/protected', isLoggedin, (req, res) => {
    //     let name = req.user.displayName;
    //     res.send(`Hellow! there ${name}`);
    // Access the entire user object and inspect it
    let user = req.user;
    res.json(user); // You can use res.json() to send the user object as JSON
});


app.listen(1010, () => {
    console.log("server is running on port 1010");
});

