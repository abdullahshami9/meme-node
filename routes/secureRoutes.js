// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// // Secure route protected by OAuth2
// router.get('/secure-route', passport.authenticate('oauth2-bearer', { session: false }), /* Your route handler */);

// module.exports = router;


// secureRoutes.js
const express = require('express');
const router = express.Router();

// Define middleware to check for authentication
router.use((req, res, next) => {
  // Implement authentication and authorization checks here
  // Redirect to /oauth/login if not authenticated
  next();
});

router.get('/profile', (req, res) => {
    res.json({
        status: 2000,
        msg: 'we are in profile'
    });
});


module.exports = router;