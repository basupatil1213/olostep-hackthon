import WebScrap from "../models/WebScrap.js";
import gbc from "../helper/webscrap_site.js";


export const getAllWebScraps = async () => {
    try {
        const webscraps = await WebScrap.find();
        return webscraps;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}

export const getBrowserContent = async (url) => {
    try {
        console.log(`Inside service: ${url}`);
        // const webscrap = await WebScrap.findOne({url : url, createdAt: { $gte: new Date(new Date().setDate(new Date().getDate() - 1)) }});
        // if (webscrap) {
        //     return {title: webscrap.title, body: webscrap.body};
        // }
        const {title, body} = await gbc(url);
        return {title, body, url};
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }
}

export const saveWebScrap = async ({title, body, url, user}) => {
    try {
        const newWebScrap = new WebScrap({
            title,
            body,
            url,
            user
        });
        await newWebScrap.save();
        return newWebScrap;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return null;
    }  
}