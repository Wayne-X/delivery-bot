# delivery-bot
Chrome extension to notify when Prime Now or Amazon Fresh delivery slots are available.

![screenshot of delivery notification](https://i.imgur.com/obtyUXJ.png)

## Usage
1. In the Chrome browser with the extension installed, navigate to the checkout page (open your cart, click checkout, fill in your infomation, etc)
* for Prime Now, the checkout page should begin with <pre>primenow.amazon.com/checkout</pre>
* for Amazon Fresh, the checkout page should begin with <pre>www.amazon.com/gp/buy/shipoptionselect</pre>
2. Leave the page open. It's fine to leave the page in the background.

The extension will refresh the page every minute and display a chrome notification when a delivery slot is available.

## Installation Instructions
1. Click "clone or download", then "download as zip"
2. Extract somewhere
3. In Chrome, navigate to <pre>chrome://extensions</pre>
4. Turn on developer mode (toggle in the top right)
5. Click "Load Unpacked" (button on the top left)
6. Inside the extracted delivery-bot folder, select the folder "chrome_extension"
7. Go to the prime now checkout page and accept the request for permissions to send notifications.
Done!

To verify the extension is running, go to the checkout page and the developer console should say something like "Delivery bot is running: Sat Apr 04 2020 14:30:07 GMT-0700 (Pacific Daylight Time)"
