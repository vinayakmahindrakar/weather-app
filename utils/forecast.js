const request = require('request');

const forecast = (latitude, longitude, callback)=>{
    const url = "http://api.weatherstack.com/current?access_key="+process.env.WEATHER_STACK_ACCESS_TOKEN+"&query="+latitude+","+longitude;
   //console.log(url);
    request({url: url, json: true}, (error, response)=> {
        if (error) {
            callback("Unable to connect to forecast service", undefined);
        }else if (response.body.error) {
            callback("Unable to find location", undefined);
        }
        else {
            callback(undefined, `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike}`);
        }
    });
};


module.exports = forecast;