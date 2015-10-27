# nanodash

A tiny, lightweight framework for building info boards based purely on client-side JS/HTML. Based on Bootstrap for typography & layout and jQuery for grabbing and twerking data.

## Caveat Emptor

A major goal of this project is to keep everything client-side so you can throw this thing on AWS or somewhere cheap and be up and running. While it's awesome that you won't need any server-side logic, it does mean all your API keys will be exposed in your code. Therefore, you should probably protect your deployment behind some basic-auth and/or a non-obvious URL that you don't share and a no-robots file to prevent spidering. If you're okay with all that... read on.

## Getting Started

Note: these instructions assume Node.js 0.10.28
  - Install [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).
  - Run `gem install slim` to install the ruby gem for slim if you don't have it installed already
  - Run `npm install` to install the required Node.js modules
  - To get weather data sign up for an API key from [Forecast.io](https://developer.forecast.io/)
  - Copy "config.js.sample" to "config.js"
  - Swap in your API key.
  - Run Gulp to compile your code  
  - Deploy your compiled HTML (in the 'dist' folder) to a web server, CDN, etc.


Starting gulp:

    $ gulp

Now visit http://localhost:1337 to see your code in action. You can use LiveReload to see changes in realtime.

## TODO

- Add tests. Yes, really.
- Make it easy to configure the times when the clock background should turn red.

## Done Recently (changelog)
- Make bus regex, bus URL, and forecast location configurable
- Make clock BG turn red from 8:30-9am.
- Add Celsius display of high temp (so I can learn)
