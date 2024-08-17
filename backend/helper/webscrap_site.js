import puppeteer from 'puppeteer';

const getBrowserContent = async (url) => {
    
    // setup browser

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // go to the page
    await page.goto(url, {
        waitUntil: 'networkidle0',
    });

    // set the viewport
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });

    // get the content of the page
    const body = await page.evaluate(() => {
        return document.body.outerHTML;
    }
    );

    // get teh title of the page
    const title = await page.title();


    // close the browser
    await browser.close();

    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);

    return {title, body};

};

export default getBrowserContent;