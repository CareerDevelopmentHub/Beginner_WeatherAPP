function getWeather() {
  var city = document.getElementById("city").value;
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=your_api_key"
  )
    .then((response) => response.json())
    .then((data) => {
      var temp = Math.round(data.main.temp - 273.15);
      var humidity = data.main.humidity;
      var windSpeed = data.wind.speed;
      document.getElementById("showWeather").innerHTML =
        "Temperature in " +
        city +
        " is " +
        temp +
        "°C, Humidity is " +
        humidity +
        "%, Wind Speed is " +
        windSpeed +
        " m/s";
    })
    .catch((err) => alert("City not found"));
}
