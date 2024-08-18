import cors from 'cors';
import express from 'express';
import registerRouter from './routes/index.js';
import { connectDB } from './config/dbConfig.js';

const initialize = async (app) => {
    app.use(cors());
    // app.use(express.json());
    // app.use(express.urlencoded());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true })); 
    await connectDB();
    registerRouter(app);
}

export default initialize;