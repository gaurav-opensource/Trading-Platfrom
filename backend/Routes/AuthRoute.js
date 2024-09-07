
const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../Middlewares/AuthMiddleware');

const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/',userVerification);


module.exports = router;

// Controllers/AuthController.js

// const User = require('../model/UserModel');
// const bcrypt = require('bcrypt');

// exports.Signup = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Print user details to the console
//     console.log("New user created:", {
//       username: newUser.username,
//       email: newUser.email,
//       password: newUser.password, // Note: In production, avoid logging sensitive information like passwords
//       createdAt: newUser.createdAt,
//     });

//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// };
