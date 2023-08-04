const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button")
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '49259834e7cedb0c5cf8239d86574a19';



function getWeather() {
    fetch(baseUrl + input.value + '&appid=' + apiKey)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            try {
                    
                const nameCity = data?.name;

                city.innerHTML = nameCity
                console.log(nameCity)
                
            } catch (err) {
                alert("you have entered the wrong city")
            }
        })
			

}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather();
})