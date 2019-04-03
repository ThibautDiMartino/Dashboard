const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const request = require('request-promise');
const mongoose = require('mongoose');
const serviceAccount = require('./dashboard-b79a1-firebase-adminsdk-yzd8k-cf92b2f603.json');
const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://dashboard-cd28.firebaseio.com'
});
const app = express();
const port = 8080;

exports.app = app

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://Snass:TgJdm30S96@ds259253.mlab.com:59253/dashboard');

var citySchema = new mongoose.Schema({
    name : String 
});

var cityModel = mongoose.model('City', citySchema);

async function getWeather(cities) {
    var weather_data = [];
    for (var city_obj of cities) {
        var city = city_obj.name;
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=69a7399413565c0142ebade61b975f8f`;
        var response_body = await request(url);
        var weather_json = JSON.parse(response_body);
        var weather = {
            city : city,
            temperature : Math.round((weather_json.main.temp - 32) * (5/9)),
            description : weather_json.weather[0].description,
            icon : weather_json.weather[0].icon
        };
        weather_data.push(weather);
    }
    return weather_data;
}

app.get('/', function(request, response){
    response.render('index.ejs');
});

app.get('/home', function(request, response){
    response.render('dashboard_apis.ejs');
});

app.get('/weather', function(req, res) {

    cityModel.find({}, function(err, cities) {
        getWeather(cities).then(function(results) {
            var weather_data = {weather_data : results};
            res.render('weather', weather_data);
        });
    });      
});

app.post('/weather', function(req, res) {
    var newCity = new cityModel({name : req.body.city_name});
    newCity.save();
    res.redirect('/weather');
});

app.listen(port, function(){
    console.log('Your app is currently running on port ' + port)
});
