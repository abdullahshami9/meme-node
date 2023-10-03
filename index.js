const express = require("express");
const next = require("next");
const session = require('express-session');
const passport = require('./oauth');
const path = require('path'); // Import the path module

// const app = next({ dev });
const app = express();
const UserRoute = require('./routes/Route');
// app.use('/user', UserRoute);\


//nextapp
const dev = process.env.NODE_ENV !== 'production';
const appNext = next({ dev });
const handle = appNext.getRequestHandler();

appNext.prepare().then(() => {
    app.get('*', (req, res) => {
      return handle(req, res);
    });
  
    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
  return 1;

function isLoggedin(req, res, next){//middleware
    req.user ? next() : res.sendStatus(401);
}

app.use(passport.initialize());
app.get('/', (req, res) =>{
    console.log(__dirname)
    const filePath = path.join(__dirname, '/views/next.js');
    res.send(filePath)
    // const filePath = path.join(__dirname, 'index.html');
    // res.sendFile(filePath);
    // res.render(filePath);
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

