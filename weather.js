//Hoth Weather
var hothWeather = [
    "It\'s cold... \n- Hoth",
    "It\'s so cold I just saw a Wampa! \n- Hoth",
];

//Tattooine Weather
var tatooineWeather = [
    "I don't like sand... \n- Tatooine",
    "I hope I get a tan! \n- Tatooine",
];

//Alderann Weather
var alderaanWeather = [
    "It\'s beautiful! \n- Alderaan",
    "Look at that view, wait... what\'s that green light in the sk.... \n-Alderaan",
];

//Kamino
var kaminoWeather = [
    "It\'s pretty wet... \n- Kamino",
    "Anyone for fishing? \n- Kamino",
];

//Mustafar
var mustafarWeather = [
    "It\'s not just hot... it\'s DAM HOT! \n- Mustafar",
    "I need to buy Air Conditioning! \n- Mustafar",
];

//Endor
var endorMoonWeather = [
    "Tropical! \n-Forest Moon of Endor",
    "Great weather to cuddle an Ewok \n- Forest Moon of Endor",
];

//Endoor Moon
var jakkuWeather = [
    "Isn\'t this pretty much Tatooine?! \n- Jakku",
];

//Bespin
var bespinWeather = [
    "Pretty cloudy... \n- Bespin",
];

//Dathomir
var dathomirWeather = [
     "A bit red, and it smells weird... \n- Dathomir"
]


var weatherArray = [
    
    hothWeather,
    tatooineWeather,
    alderaanWeather,
    kaminoWeather,
    mustafarWeather,
    endorMoonWeather,
    jakkuWeather,
    bespinWeather,
    dathomirWeather

];

module.exports =  {
    generateWeather: function() {
    // First get a random array, then get a random index from that array
    // Math.random() returns a number between 0 and 1. Math.floor rounds a number down to the nearest whole number.
     var randomWeatherArray = weatherArray[Math.floor(Math.random() * weatherArray.length)];
     var randomWeather = randomWeatherArray[Math.floor(Math.random() * randomWeatherArray.length)];
     return randomWeather;
    }
};