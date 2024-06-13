const searchInput = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_button");
const img = document.querySelector(".icon");

async function getWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=242d66a672734c494f1e7b0e9b4a053d&units=metric`
  );

  // if (res.status == 404) {
  //   document.querySelector(".error").Style.display = "block";
  // } else {
  //   document.querySelector(".error").Style.display = "none";
  // }
  const data = await res.json();
  console.log(data);

  document.querySelector(".celcius").innerHTML =
    Math.round(data.main.temp) + "°c";

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".humidityp").innerHTML =
    Math.round(data.main.humidity) + "%";

  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + "km/h";

  if (data.weather[0].main == "Clouds") {
    img.src = "./WeatherImages/clouds.png";
  } else if (data.weather[0].main == "clear") {
    img.src = "./WeatherImages/clear.png";
  } else if (data.weather[0].main == "Rain") {
    img.src = "./WeatherImages/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    img.src = "./WeatherImages/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    img.src = "./WeatherImages/mist.png";
  }
}
searchBtn.addEventListener("click", () => {
  getWeather(searchInput.value);
});
