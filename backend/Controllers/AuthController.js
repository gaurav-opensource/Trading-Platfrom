
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
        
  
        return res.status(201).json({ message: 'User created successfully' ,success:true});
        
    } catch (error) {
        console.error("Registration error:", error); // Log the error for debugging
        return res.status(500).json({ message: 'Error', success:false});
    }
  };



  const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all required fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' });
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

        // Generate a token (or session handling logic)
        const token = crypto.randomBytes(32).toString("hex");

        // Update the user document with the new token
        await User.updateOne({ _id: user._id }, { token });

        // Return a success response along with the token
        return res.status(200).json({
            message: 'Login successful',
            token,
            success: true
        });

    } catch (error) {
        // Log the error for debugging
        console.error("Login error:", error);
        return res.status(500).json({ message: 'An error occurred during login', success: false });
    }
};
module.exports = { register,login };