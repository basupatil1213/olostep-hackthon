import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
i

export const register = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({email, hashedPassword});
    await newUser.save();
    res.status(200).send("User registered successfully");
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.status(400).send("User does not exist");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send("Password is incorrect");
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.header("auth-token", token).send(token);
}
