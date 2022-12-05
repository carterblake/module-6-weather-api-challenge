const key = "f4dd5b1de92c541c29d288f7b2b4495d";


var urlCity2Coords = "";
var resultCity = "whoopsie";
var cityLon = 0;
var cityLat = 0;

//function to grab weather info if given city name
function city2Coords(cityName){
    var urlCity2Coords = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + key;

//get information from url
fetch(urlCity2Coords)
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        
        //city name from search result
        let resultCity = data[0].name;
        console.log(resultCity);
        document.getElementById("test-display").textContent = resultCity;

        //longitude of city
        let cityLon = data[0].lon;
        console.log(cityLon);

        //latitude of city
        let cityLat = data[0].lat;
        console.log(cityLat);

      });

//set information to variables

};


//call function with user input
console.log(city2Coords("wyoming"));
//let testDisplay = document.getElementById("test-display");
//testDisplay.textContent = resultCity;
console.log(urlCity2Coords);

//display information
