require("dotenv").config();
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    console.log("Please provide an address");    
} else {
    geocode(address, (error, {latitude, longitude}={}) => {
        if (error) {
            return console.log(error);
        } 
        forecast(latitude, longitude, (error, data)=>{
            console.log('Error', error);
            console.log('Data', data);
        });
    });     
}
