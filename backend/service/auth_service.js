import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (email, password, name) => {
    const user = await User.findOne({email});
    if (user) {
        throw new Error("User already exists");
    }

    console.log("Inside register service");

    console.log(`Email: ${email} Password: ${password}`);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email : email,
        password : hashedPassword,
        name : name,
    });
    await newUser.save();
    return newUser;
}

export const login = async (email, password) => {
    console.log("Inside login service");
    console.log(`Email: ${email} Password: ${password}`);
    const user = await User.findOne({email});
    if (!user) {
        throw new Error("User does not exist");
        
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return null;
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    console.log(`Successfully logged in: ${token}`);
    return token;
}
