const User = require('../models/user'); // Import the User model

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['id','email'],
      });
      res.json(users);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  },
};
