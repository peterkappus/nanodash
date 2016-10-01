// Copy this file to config.js and put your Secret(ish) API keys, etc. in it.
// Note that you're probably going to deploy all this to a public webserver anyway so don't put anything too sensitive in here.

FORECAST_IO_API_KEY = "12345...Replace this with your API key.";

//this is the key to your google sheet containing a table containing your art URLs, words to learn, etc.
//use this as a guide: https://docs.google.com/spreadsheets/d/1_UVf8j6EOhHgVADH34PVreaL3WrQXPyfN2cQ-6Z16GU/edit?usp=sharing

GOOGLE_SHEET_KEY = "1_UVf8j6EOhHgVADH34PVreaL3WrQXPyfN2cQ-6Z16GU";

//using Aiden Feldman's awesome JSONProxy: https://jsonp.afeld.me/
BUS_URL = "https://jsonp.afeld.me/?url=http%3A%2F%2Fm.countdown.tfl.gov.uk%2Farrivals%2F76840&callback=?";

//this nasty regex gives us the time to the next 168 bus
BUS_REGEX = /Road&#160;<\/td>\s+<td class="resDue">(\d+)/;

//latitude & Longitude pair to insert in Forecast.IO URL
//this is for a "random" location in London ;)
FORECAST_LAT_LONG = "51.554757,-0.165694";

ROTATION_INTERVAL = 10; //seconds between panel rotations

//A string of image URLs separated by spaces (for the art panel)
IMG_URLs = ""

//Add panels here
//you can include a panel multiple times for different intervals and time periods
//addPanel(callback, interval, start_hour, end_hour, data)
addPanel(basic_sign, 15, 22, 24, {text: 'Time for bed!', background: '#600'}); //pre-midnight
addPanel(basic_sign, 15, 0, 2, {text: 'Fo realz: Go to bed!', background: '#a00'}); // post-midnight
addPanel(wisdom_setup, 15, 8, 24);
addPanel(clock, 15, 0, 24);
addPanel(basic_sign, 30, 0, 8); //blank!
//addPanel(long_text, 15, 0, 24, {text: "This is a longer piece of text to fit inside the box."});
addPanel(weather, 15, 8, 23);
