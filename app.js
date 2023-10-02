const express = require('express');
const sequelize = require('./db.js'); // Use a relative path to import db.js
// Import the database connection
const routes = require('./routes/Route');
const passport = require('passport');
const oauth2orize = require('oauth2orize');
const server = oauth2orize.createServer();
const oauthRoutes = require('./routes/oauthRoutes');
const secureRoutes = require('./routes/secureRoutes');

const app = express();
require('./oauth');

// Include OAuth2 server configuration and routes
// app.use('/oauth', oauthRoutes);

// Use route middleware to protect secure routes
// app.use('/', secureRoutes);


// app.use('/', routes);  This won't work

// const PORT = process.env.PORT || 3000;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connected to the database.');
//     app.listen(PORT, () => {
//       console.log(`OAuth 2.0 server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });






// // const mysql = require('mysql');

// // // Create a MySQL connection
// // const connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: '123456',
// //   database: 'memehub',
// // });

// /// Connect to the MySQL database
// // connection.connect((err) => {
// //     if (err) {
// //       console.error('Error connecting to MySQL:', err);
// //       return;
// //     }
// //     console.log('Connected to MySQL!');
// //   });
  
//   // Perform a SELECT query
//   // const selectQuery = 'SELECT * FROM register';
  
//   // connection.query(selectQuery, (err, results) => {
//   //   if (err) {
//   //     console.error('Error executing SELECT query:', err);
//   //     return;
//   //   }
  
//   //   console.log(results);


// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('memehub', 'root', '123456', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// const User = sequelize.define('register', {
//   email: DataTypes.STRING,
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false,
//     unique: true,
//     field: 'id',
//   },
// }, {
//   timestamps: false,
//   tableName: 'register', // Use a custom table name
//   defaultScope: {
//     attributes: { exclude: ['id'] }, // Exclude the 'id' column by default
//   }, // Exclude the 'id' column from SELECT queries

// });


// // Define an asynchronous function to run your code
// async function main() {
//   try {
//     // Connect to the database
//     await sequelize.authenticate();
//     console.log('Connected to the database.');

//     // Create a new user
//     // const jane = await User.create({
//     //   username: 'janedoe',
//     //   birthday: new Date(1980, 6, 20),
//     // });

//     // Retrieve all users
//     const users = await User.findAll();

//     // Display the retrieved users
//     console.log('All users:');
//     users.forEach((user) => {
//       console.log(user.id, user.email);
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     // Close the database connection
//     // await sequelize.close();
//     // console.log('Database connection closed.');
//   }
// }

// // Call the asynchronous function
// main();










  
//     // Close the connection when done
//     // connection.end((err) => {
//     //   if (err) {
//     //     console.error('Error closing MySQL connection:', err);
//     //   }
//     //   console.log('Connection closed.');
//     // });
//   // });
  