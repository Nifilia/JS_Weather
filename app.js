const city = document.querySelector('#weather');
const input = document.querySelector('input');

city.addEventListener('click', cityWeather)

document.addEventListener('DOMContentLoaded', cityWeather);


function weatherDataFetch(city) {
	var key = 'ae283fd21026f903724fe0bd7811dee2';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	}) // convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		//catch any errors
	});
}

function cityWeather(e) {
	const city = input.value;
	if (city == '') {
		weatherDataFetch('')
	} else {
		weatherDataFetch(city);
	}
	clearInput();
}


function drawWeather(data) {
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var description = data.weather[0].description;

	document.querySelector('#description').innerHTML = description;
	document.querySelector('#temp').innerHTML = celcius + '&deg';
	document.querySelector('#location').innerHTML = data.name;
}

function clearInput() {
	document.getElementById('city-name').value = "";
}