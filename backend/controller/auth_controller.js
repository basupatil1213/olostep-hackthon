import e from "express";
import { register, login } from "../service/auth_service.js";

export const registerController = async (req, res) => {

    try {
        console.log("Inside register controller");
        console.log(`body: ${JSON.stringify(req.body)}`);
        const { email, password, name } = req.body
        console.log(`Email : ${email} Password : ${password}`);
        const result = await register(email, password, name);
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(500).send("Error: Unable to register the user");
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send({
            message: error.message
        });
    }


}

export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body;
        const result = await login(email, password);
        if (result) {
            res.status(200).send({
                token: result
            });
        } else {
            res.status(500).send({
                message: "email or password is incorrect"
            });
        }
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send({
            message: error.message
        });
    }
}