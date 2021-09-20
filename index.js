const request = require('request');
const url = 'http://api.weatherapi.com/v1/current.json?key=38863d79c33f4f488e9102314212009&q=London&aqi=no';

// api  = weatherapi.com

request({ url: url}, (error, response) => {
    if (error) {console.log('error')}
    else {
    const data = JSON.parse(response.body)
    console.log('location - ',data.location.name,'pogoda - ', data.current.condition.text, ', veter - ', data.current.wind_kph);
    }   
})

const request = require('request')
// api = mapbox.com
const geocodeURL =
'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZGFuemFrIiwiYSI6ImNrdHNsNGljajBkMXoycG8zMHZ4ZHY0eGMifQ.hvOViZNsWm6uFncWyNj_uQ'
request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})