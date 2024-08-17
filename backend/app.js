import cors from 'cors';
import express from 'express';
import registerRouter from './routes/index.js';
import { connectDB } from './config/dbConfig.js';

const initialize = async (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    await connectDB();
    registerRouter(app);
}

export default initialize;