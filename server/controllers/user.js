const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

const signUpController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
    
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
    
        res.status(201).json({ message: "Account is successfully created" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, "secretKey");
        res.json({ token, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { signUpController, loginController };
