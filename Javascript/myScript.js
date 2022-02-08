"user strict";

let searchInput = document.getElementById("searchInput");
let getWeather = document.getElementById("getWeather");
// API
var responseResult = [];
async function weather(cityName) {
  let responseAPI = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=110b51b4688a4a7981620324220102&q=${cityName}&days=3`
  );
  responseResult = await responseAPI.json();
}

getWeather.addEventListener("click", function () {
  weather(searchInput.value);
  displayWeather();
});

function displayWeather() {
  let content = ``;

  // let day = weekday[d.getDay()];

  //   let day = new Date(responseResult.current.last_updated);
  content += `<div class="col-md-4 mb-md-4 mb-4">
  <div class="items p-3 bg-white rounded-3">
    <div class="d-flex justify-content-between py-3">
      <span>${getDayResponse(
        responseResult.forecast.forecastday[0].date
      )}</span>
      <span>${responseResult.forecast.forecastday[0].date}</span>
    </div>
    <div>
      <p class="text-start">${responseResult.location.name}</p>
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="text-start">${responseResult.current.temp_c} &deg;C</h2>
        <img
          src="${responseResult.current.condition.icon}"
          alt=""
        />
      </div>
    </div>
    <div class="text-start">
      <span class="mb-4">${responseResult.current.condition.text}</span>
       <div class="d-flex justify-content-between py-3 text-center">
         <span>Humidity ${responseResult.current.humidity}%</span>
        <span>Wind Speed ${responseResult.current.wind_kph} k/h</span>
        <span>Direction ${responseResult.current.wind_dir}</span>
      </div>
    </div>
  </div>
</div>
<div class="col-md-4 mb-md-4 mb-4">
<div class="items p-3 bg-white rounded-3">
              <p>
              ${getDayResponse(responseResult.forecast.forecastday[1].date)}
              </p>
              <div>
                <img
                  src="${
                    responseResult.forecast.forecastday[1].day.condition.icon
                  }"
                  alt=""
                />
              </div>
              <div>
                <p>${
                  responseResult.forecast.forecastday[1].day.maxtemp_c
                } &deg; C</p>
                <p>${
                  responseResult.forecast.forecastday[1].day.mintemp_c
                }  &deg; C</p>
              </div>
              <span>${
                responseResult.forecast.forecastday[1].day.condition.text
              }</span>
            </div>
          </div>          
          <div class="col-md-4 mb-md-4 mb-4">
          <div class="items p-3 bg-white rounded-3">
            <p>
            ${getDayResponse(responseResult.forecast.forecastday[2].date)}
            </p>
            <div>
              <img
                src="${
                  responseResult.forecast.forecastday[2].day.condition.icon
                }"
                alt=""
              />
            </div>
            <div>
              <p>${
                responseResult.forecast.forecastday[2].day.maxtemp_c
              } &deg; C</p>
              <p>${
                responseResult.forecast.forecastday[2].day.mintemp_c
              }  &deg; C</p>
            </div>
            <span>${
              responseResult.forecast.forecastday[2].day.condition.text
            }</span>
          </div>
        </div>`;
  document.getElementById("details").innerHTML = content;
}

function getDayResponse(dateResponse) {
  var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(dateResponse);
  return weekday[d.getDay()];
}
