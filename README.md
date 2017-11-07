# nanodash

A tiny, lightweight framework for building time-based, rotating real-time info boards based purely on client-side JS/HTML. Uses Bootstrap for typography & layout and jQuery for grabbing and twerking data.

## Caveat Emptor

A major goal of this project is to keep everything client-side so you can throw this thing on AWS or somewhere cheap and be up and running. While it's awesome that you won't need any server-side logic, it does mean all your API keys will be exposed in your code. Therefore, you should probably protect your deployment behind some basic-auth and/or a non-obvious URL that you don't share and a no-robots file to prevent spidering. If you're okay with all that... read on.

## Getting Started

### Using Docker

First time:
#build the image
`docker build -t nanodash .`

Subsequent times:
# login and start the app running
- `docker run -v "$(pwd):/myapp" -it -p 1337:1337 nanodash bash`
# in the container
- `gulp`


## Other stuff  
  - To get weather data sign up for an API key from [Forecast.io](https://developer.forecast.io/)
  - Copy "config.js.sample" to "config.js"
  - Swap in your forecast.io API key and lat/long (if you want weather)
  - Run `gulp` to compile & serve your code
  - Visit http://localhost:1337 and tweak away.
  - Deploy your compiled HTML (in the 'dist' folder) to a web server, CDN, etc.

## Deploying to S3 using s3cmd
- `brew install s3cmd` (if you're using brew)
- Then you can run `s3cmd sync dist/ s3://your.bucket.name --delete-removed -P --rexclude=.git*` to sync your files.


## Adding panels
The `index.html.slim` file contains all the panels. Each must have a unique ID and a class of `.dashpanel`.

To add panels, call the `addPanel` method and pass in a callback to call each time the panel is loaded, an interval (how many seconds to show the panel, the hour when it should start showing (0-24) and the hour when it should stop showing. A final dictionary object holds additional info which gets passed into the callback (e.g. text to display).

```
addPanel(callback, interval, start_hour, end_hour, data_object}
```

### For example...
```
addPanel(basic_sign, 15, 7,9, {text: 'Good morning!', background: '#a00'});
```

###Pull JPG urls from the source of a page:
```
pbpaste | grep -oE "http://\S*?png"
```

## TODO

- Add tests. Yes, really.
- Pull data from a public google spreadsheet

## Done Recently (changelog)
- Add "addPanel" method and clean up config
- Consolidate panel types
- Add "time" attribute to panels to define how long to show each one
- Build a way to rotate through various panels on a timer.
- Make bus regex, bus URL, and forecast location configurable
- Make clock BG turn red from 8:30-9am.
- Add Celsius display of high temp (so I can learn)
