const form = document.querySelector("form");
var input = document.querySelector("input");
const btn = document.querySelector("button");
const city = document.querySelector("#location");
const apiKey = "49259834e7cedb0c5cf8239d86574a19";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  input.value +
  "&appid=49259834e7cedb0c5cf8239d86574a19";

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=fb7887d0db45ec911b03ff91209abc26",
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let cityValue = data["name"];
      city.innerHTML = cityValue;
    })
    .catch((err) => {
      alert("invalid");
    });
});
