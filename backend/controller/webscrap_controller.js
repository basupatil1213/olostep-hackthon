import { getBrowserContent, saveWebScrap, getAllWebScrapsById } from "../service/webscrap_service.js";

export const getWebScrap = async (req, res) => {

    console.log(`Inside controller: ${req.body.url}`);
    const url = req.body.url;
    const result = await getBrowserContent(url);
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(500).send("Error: Unable to get the content");
    }
}

export const saveWebScrapController = async (req, res) => {
    const {title, body, url, user} = req.body;
    const result = await saveWebScrap(title, body, url, user);
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(500).send("Error: Unable to save the content");
    }
}

export const getAllWebScrapsController = async (req, res) => {
    console.log(`Inside controller: ${JSON.stringify(req.user)}`);
    const user = req.user;
    const result = await getAllWebScrapsById(user.id);
    if (result) {
        res.status(200).send({
            data : result
        });
    } else {
        res.status(500).send("Error: Unable to get the content");
    }
}

