const express = require("express");

const app = express();

const UserRoute = require('./routes/Route');
app.use('/user', UserRoute);

app.listen(1010, () => {
    console.log("server is running on port 1010");
});