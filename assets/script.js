const key = "f4dd5b1de92c541c29d288f7b2b4495d";


var urlCity2Coords = "";
var resultCity = "whoopsie";
var cityLon = 0;
var cityLat = 0;

//function to grab weather info if given city name
function city2Coords(cityName){
    var urlCity2Coords = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + key;

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

        var urlGetWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&appid=" + key;
        console.log(urlGetWeather);

    fetch(urlGetWeather)
      .then(function(response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.list[0].main.temp);
        document.getElementById("temperature").textContent = data.list[0].main.temp + " degrees fahrenheit";

        console.log(data.list[0].wind.speed);
        document.getElementById("wind").textContent = data.list[0].wind.speed + " mph";

        console.log(data.list[0].main.humidity);
        document.getElementById("humidity").textContent = data.list[0].main.humidity + "%";

        console.log(data.list[0].dt_txt)
        document.getElementById("date").textContent = data.list[0].dt_txt;
      })

      })

};


var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {

    //var inputCity = document.getElementById("search-site");
    var inputCity = prompt("please type a city");
    if (city2Coords(inputCity) != 0) {
        document.getElementById("test-display").textContent = "please enter a valid city";
    }

});

