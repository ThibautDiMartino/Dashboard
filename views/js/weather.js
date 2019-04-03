// const myServer = require('../../server.js');

// var kremlin = new cityModel({name : 'Le Kremlin-Bicetre'});
// kremlin.save()

// async function getWeather(cities) {
//     var weather_data = [];

//     for (var city_obj of cities) {
//         var city = city_obj.name;
//         var url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6f6c989df7eb4405a237083ca7a441a6';
//         var response_body = await request(url);
//         var weather_json = JSON.parse(response_body);
//         var weather = {
//             city : city,
//             temperature : Math.round(weather_json.main.temp),
//             description : weather_json.weather[0].description,
//             icon : weather_json.weather[0].icon
//         };
//         weather_data.push(weather);
//     }
//     return weather_data;
// }

// function loadInfos() {
//     request(url, function(error, response, body) {
//         weather_json = JSON.parse(body);
//         console.log(weather_json);
//         var weather = {
//             city : city,
//             temperature : weather_json.main.temp,
//             description : weather_json.weather[0].description,
//             icon : weather_json.weather[0].icon
//         };
//         var weather_data = {weather : weather};
//     });
// }


// $(document).ready(function(){
//     $("#getWeather").click(function(){
//         // var city = 'Las Vegas';
//         var city = $(".city").val();
//         var key = '6f6c989df7eb4405a237083ca7a441a6';

//         var weather = {
//             city : city,
//             temperature : Math.round(weather_json.main.temp),
//             description : weather_json.weather[0].description,
//             icon : weather_json.weather[0].icon
//         };
//         var weather_data = {weather : weather};
//         // let url = `http://api.openweather.org/data/2.5/find?q=${city}&APPID=${key}&units=metric`
//         var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6f6c989df7eb4405a237083ca7a441a6&units=metric`
//         return fetch(url).then((response) => response.json())
//     })
// });