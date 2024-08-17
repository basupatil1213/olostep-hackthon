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
    try {
        console.log("Inside login service");

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.error("User does not exist");
            throw new Error("User does not exist");
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.error("Invalid password");
            return null; // or throw an error if you prefer
        }

        // Remove password from user object
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Adjust token expiration as needed
        console.log(`Successfully logged in: ${token}`);

        // Return token and user (without password)
        return { token, user: userWithoutPassword };
    } catch (error) {
        console.error("Error during login:", error.message);
        throw new Error("Internal server error");
    }
};
