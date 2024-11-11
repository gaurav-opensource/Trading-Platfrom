
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { User } = require("../model/UserModel.js");


 const register = async (req, res) => { // Add req and res parameters
  try {
      const { name, email, password, username } = req.body;
      console.log(req.body);
      
      // Check if all fields are filled
      if (!password || !email || !username || !name) {
          return res.status(400).json({ message: 'Please fill in all fields' });
      }
      
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'Email already in use' });
      }
      const existingUser1 = await User.findOne({ username });
      if (existingUser1) {
          return res.status(400).json({ message: 'username already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user instance
      const newUser = new User({
          name,
          email,
          password: hashedPassword,
          username
      });

      // Save the user
      await newUser.save();

      // Create a new profile associated with the user
      

      return res.status(201).json({ message: 'User created successfully' });
      
  } catch (error) {
      console.error("Registration error:", error); // Log the error for debugging
      return res.status(500).json({ message: 'Error' });
  }
};








 const login = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Check if the email field is provided
      if (!email || !password) {
          return res.status(404).json({ message: 'Please fill in all fields' });
      }

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'User does not exist' });
      }

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = crypto.randomBytes(32).toString("hex");

      await User.updateOne({_id: user._id}, {token});


      // Successful login - generate a response (consider generating a token here)
      return res.status(200).json({ 
        token
      });
      
  } catch (error) {
      console.error("Login error:", error); // Log the error for debugging
      return res.status(500).json({ message: 'Error' });
  }
};

module.exports = { register,login };