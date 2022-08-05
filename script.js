let weather = {
    apiKey: "0284daa3f388851f67c2032ace4b9e36",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => console.log(data)); 
        },
        displayWeather: function (data) {
        }
};