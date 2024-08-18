import express from 'express';
import { getWebScrap, getAllWebScrapsController, saveWebScrapController } from '../controller/webscrap_controller.js';

const webscrap_router = express.Router();

webscrap_router.route('/')
    .post(getWebScrap);

webscrap_router.route('/save')
    .post(saveWebScrapController);


webscrap_router.route('/all')
    .post(getAllWebScrapsController);

export default webscrap_router;