const puppeteer = require('puppeteer');

run().then(() => console.log('Donee')).catch(error => console.log(error));

async function run() {
    const browser = await puppeteer.launch({headless: false});

    // open new page and navigate to google
    const page = await browser.newPage();
    await page.goto('https://google.com');

    // type "javascript" into the search bar
    await page.evaluate(() => {
        document.querySelector('input[name="q"').value = 'JavaScript';
    });

    // click on google search and wait for the page to load
    const waitForLoad = new Promise(resolve => page.on('load', () => resolve()));
    await page.evaluate(() => {
        document.querySelector('input[value="Google-keresés').click();
    });
    await waitForLoad;

    // wait 5 sec
    await new Promise(resolve => setTimeout(resolve, 5000));

    await browser.close();
}