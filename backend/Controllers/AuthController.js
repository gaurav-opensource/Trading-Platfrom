const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../model/UserModel.js");

const register = async (req, res) => {
    try {
        const { name, email, password, username } = req.body;

        if (!name || !email || !password || !username) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or username already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            username
        });

        await newUser.save();

        return res.status(201).json({ message: 'User created successfully', success: true });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ message: 'An error occurred', success: false });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        return res.status(200).json({
            message: 'Login successful',
            success: true
        });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: 'An error occurred', success: false });
    }
};

module.exports = { register,login };