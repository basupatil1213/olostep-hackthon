import cors from 'cors';
import express from 'express';
import registerRouter from './routes/index.js';
import { connectDB } from './config/dbConfig.js';

const initialize = async (app) => {
    const allowedOrigins = ['http://localhost:5173', 'https://olostep-hackthon.vercel.app'];

    app.use(cors({
        origin: function (origin, callback) {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error(`Origin ${origin} not allowed by CORS`));
            }
        },
        credentials: true
    }));

    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true })); 
    
    try {
        await connectDB();
        registerRouter(app);
    } catch (error) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1); // Exit the process with a failure code
    }
}

export default initialize;
