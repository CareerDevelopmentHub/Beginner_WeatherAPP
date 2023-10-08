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
      var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var m=data.weather[0].main;

      var image = document.createElement("img");
      image.setAttribute("id", "wicon");
      image.setAttribute("src", iconurl);
      image.setAttribute("alt", "Weather icon");
      var showWeather = document.getElementById("showWeather");
      var showCountry = document.getElementById("showCountry");
      showCountry.innerHTML=city+"<br>"; 
      showCountry.appendChild(image);

      showWeather.innerHTML =
        m+"<br>"+
        temp +
        "°C<br> Humidity is " +
        humidity +
        "% <br>Wind Speed is " +
        windSpeed +
        " m/s <br>";
    })
    .catch((err) => alert("City not found"));
}
