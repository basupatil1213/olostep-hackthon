import express from 'express';
import { registerController, loginController } from '../controller/auth_controller.js';

const auth_router = express.Router();

auth_router.route('/register').post(registerController);
auth_router.route('/login').post(loginController);

export default auth_router;