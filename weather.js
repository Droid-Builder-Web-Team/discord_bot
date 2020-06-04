//Hoth Weather
var hothWeather = [
    "It\'s cold... \n- Hoth",
    "It\'s so cold I just saw a Wampa! \n- Hoth",
];

//Tattooine Weather
var tattooineWeather = [
    "I don't like sand... \n- Tattooine",
    "I hope I get a tan! \n- Tattooine",
];

//Alderann Weather
var alderaanWeather = [
    "It\'s beautiful! \n- Alderann",
    "Look at that view, wait... what\'s that green light in the sk.... \n-Alderann",
];

var weatherArray = [
    
    hothWeather,
    tattooineWeather,
    alderaanWeather,

];

module.exports =  {
    generateWeather: function() {
     randomWeatherArray = weatherArray[Math.floor(Math.random() * weatherArray.length)];
     randomWeather = randomWeatherArray[Math.floor(Math.random() * randomweatherArray.length)];
     return randomWeather;
    }
}