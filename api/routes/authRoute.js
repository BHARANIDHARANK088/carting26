const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel.js");

// Register
router.post("/register", async (request, response) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.password, salt);

    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await newUser.save();
        response.status(200).json(savedUser);
    } catch (error) {
        response.status(500).json(error);
    }
})

// Login
router.post("/login", async (request, response) => {
    try {
        const user = await User.findOne({username: request.body.username});
        if ( !user )
        {
            return response.status(400).json("User doesn't exist");
        }

        const validate = await bcrypt.compare(request.body.password, user.password);
        if ( !validate )
        {
            return response.status(400).json("Wrong password");
        }
        
        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin
        }, 
        process.env.JWT_KEY,
           {expiresIn: "3d"}
        )

        // response.status(200).json(user);
        const { password, ...others } = user._doc;
        // we are not sending password to the user
        response.status(200).json({...others, accessToken});
    } catch (error) {
        response.status(500).json(error);
    }
})

module.exports = router;