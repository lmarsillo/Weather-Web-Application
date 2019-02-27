const appKey = '6eb5afb75db104a3b539bde757b51224';
const currentPath = 'https://api.openweathermap.org/data/2.5/weather?q=';
const forecastPath = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var temp = document.getElementById("temp");
var temptype = document.getElementById("temp-type");

var h1 = "h1";
var ht1 = "ht1";
var h2 = "h2";
var ht2 = "ht2";
var h3 = "h3";
var ht3 = "ht3";
var h4 = "h4";
var ht4 = "ht4";
var h5 = "h5";
var ht5 = "ht5";

var d1 = "d1";
var dt1 = "dt1";
var d2 = "d2";
var dt2 = "dt2";
var d3 = "d3";
var dt3 = "dt3";
var d4 = "d4";
var dt4 = "dt4";
var d5 = "d5";
var dt5 = "dt5";

function enterPressed(event) {
  if (event.key === 'Enter') {
    updateWeather();
	forecast();
  }
}

function updateWeather() {
	var input = document.getElementById('user-input').value;
	
	if (input == '') {
	
	} else {
		var url = currentPath + input + '&APPID=' + appKey;
		
		fetch(url)
		  .then(function(response) {
			  if (response.status !== 200) {
				console.log('Error. Status Code: ' +
				  response.status);
				return;
			  }

			  response.json().then(function(data) {
				console.log(data);
				const current = {};
				current.city = data.name;
				current.temp = Math.round(data.main.temp - 273.15);
				current.humidity = data.main.humidity;
				current.wind = Math.round(data.wind.speed * 3.6);
				current.icon = data.weather[0].icon;
				current.description = data.weather[0].description;
				
				assignCurrent(current);
				document.getElementById("icon").src = assignIcon(current);
			  });
			}
		  )
		  .catch(function(err) {
			console.log('Fetch Error :-S', err);
		});
	}
}

function assignCurrent(weather) {
	document.getElementById("city-name").innerHTML = weather.city;
	temp.innerHTML = weather.temp;
	temptype.innerHTML = '°C';
	document.getElementById("humidity").innerHTML = weather.humidity + '%';
	document.getElementById("wind").innerHTML = weather.wind + ' km/h';
	document.getElementById("description").innerHTML = weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
	
	var button = document.getElementById("switch-btn");
	button.style.display = "inline-block";
}

function assignIcon(weather){
	var source;

	switch(weather.icon) {
		case '01d':
			source = "images/2.png";
			break;
		case '01n':
			source = "images/3.png";
			break;
		case '02d':
			source = "images/8.png";
			break;
		case '02n':
			source = "images/9.png";
			break;
		case '03d':
			source = "images/14.png";
			break;
		case '03n':
			source = "images/14.png";
			break;
		case '04d':
			source = "images/25.png";
			break;
		case '04n':
			source = "images/25.png";
			break;
		case '09d':
			source = "images/18.png";
			break;
		case '09n':
			source = "images/18.png";
			break;
		case '10d':
			source = "images/18.png";
			break;
		case '10n':
			source = "images/18.png";
			break;
		case '11d':
			source = "images/27.png";
			break;
		case '11n':
			source = "images/27.png";
			break;
		case '13d':
			source = "images/23.png";
			break;
		case '13n':
			source = "images/23.png";
			break;
		case '50d':
			source = "images/12.png";
			break;
		case '50n':
			source = "images/5.png";
			break;	
		default:
			console.log('error');
	}
	
	return source;
}	

function forecast() {
	var input = document.getElementById('user-input').value;
	
	if (input == '') {
	
	} else {
		var url = forecastPath + input + '&APPID=' + appKey;
		
		fetch(url)
		  .then(function(response) {
			  if (response.status !== 200) {
				console.log('Error. Status Code: ' +
				  response.status);
				return;
			  }

			  response.json().then(function(data) {
				console.log(data);
				
				const hour1 = {};
				hour1.time = data.list[0].dt_txt.slice(11,16);
				hour1.icon = data.list[0].weather[0].icon;
				hour1.temp = Math.round(data.list[0].main.temp - 273.15);
				
				const hour2 = {};
				hour2.time = data.list[1].dt_txt.slice(11,16);
				hour2.icon = data.list[1].weather[0].icon;
				hour2.temp = Math.round(data.list[1].main.temp - 273.15);
				
				const hour3 = {};
				hour3.time = data.list[2].dt_txt.slice(11,16);
				hour3.icon = data.list[2].weather[0].icon;
				hour3.temp = Math.round(data.list[2].main.temp - 273.15);
				
				const hour4 = {};
				hour4.time = data.list[3].dt_txt.slice(11,16);
				hour4.icon = data.list[3].weather[0].icon;
				hour4.temp = Math.round(data.list[3].main.temp - 273.15);
				
				const hour5 = {};
				hour5.time = data.list[4].dt_txt.slice(11,16);
				hour5.icon = data.list[4].weather[0].icon;
				hour5.temp = Math.round(data.list[4].main.temp - 273.15);
				
				assignForecast(h1, ht1, hour1);
				document.getElementById("hi1").src = assignIcon(hour1);
				assignForecast(h2, ht2, hour2);
				document.getElementById("hi2").src = assignIcon(hour2);
				assignForecast(h3, ht3, hour3);
				document.getElementById("hi3").src = assignIcon(hour3);
				assignForecast(h4, ht4, hour4);
				document.getElementById("hi4").src = assignIcon(hour4);
				assignForecast(h5, ht5, hour5);
				document.getElementById("hi5").src = assignIcon(hour5);
				
				const date1 = {};
				date1.time = day(data.list[7].dt);
				date1.icon = data.list[7].weather[0].icon;
				date1.temp = Math.round(data.list[7].main.temp - 273.15);
				
				const date2 = {};
				date2.time = day(data.list[15].dt);
				date2.icon = data.list[15].weather[0].icon;
				date2.temp = Math.round(data.list[15].main.temp - 273.15);
				
				const date3 = {};
				date3.time = day(data.list[23].dt);
				date3.icon = data.list[23].weather[0].icon;
				date3.temp = Math.round(data.list[23].main.temp - 273.15);
				
				const date4 = {};
				date4.time = day(data.list[31].dt);
				date4.icon = data.list[31].weather[0].icon;
				date4.temp = Math.round(data.list[31].main.temp - 273.15);
				
				const date5 = {};
				date5.time = day(data.list[37].dt);
				date5.icon = data.list[37].weather[0].icon;
				date5.temp = Math.round(data.list[37].main.temp - 273.15);
				
				assignForecast(d1, dt1, date1);
				document.getElementById("di1").src = assignIcon(date1);
				assignForecast(d2, dt2, date2);
				document.getElementById("di2").src = assignIcon(date2);
				assignForecast(d3, dt3, date3);
				document.getElementById("di3").src = assignIcon(date3);
				assignForecast(d4, dt4, date4);
				document.getElementById("di4").src = assignIcon(date4);
				assignForecast(d5, dt5, date5);
				document.getElementById("di5").src = assignIcon(date5);
				
			  });
			}
		  )
		  .catch(function(err) {
			console.log('Fetch Error :-S', err);
		});
	}
}

function day(date){
	var day = new Date(date * 1000);
	return day.toDateString().slice(0,10);
}
	
function assignForecast(time, temp, weather) {
	document.getElementById(time).innerHTML = weather.time;
	document.getElementById(temp).innerHTML = weather.temp + '°';
	
	document.getElementById("hour-container").style.display = "flex";
	document.getElementById("date-container").style.display = "flex";
	
}	

function switchTempUnit(){
	var currentTemp = parseInt(temp.innerHTML);
	var hour1temp = parseInt(document.getElementById(ht1).innerHTML);
	var hour2temp = parseInt(document.getElementById(ht2).innerHTML);
	var hour3temp = parseInt(document.getElementById(ht3).innerHTML);
	var hour4temp = parseInt(document.getElementById(ht4).innerHTML);
	var hour5temp = parseInt(document.getElementById(ht5).innerHTML);
	var date1temp = parseInt(document.getElementById(dt1).innerHTML);
	var date2temp = parseInt(document.getElementById(dt2).innerHTML);
	var date3temp = parseInt(document.getElementById(dt3).innerHTML);
	var date4temp = parseInt(document.getElementById(dt4).innerHTML);
	var date5temp = parseInt(document.getElementById(dt5).innerHTML);
	
	if (temptype.innerHTML == '°C') {
		currentTemp = Math.round((currentTemp * 9/5) + 32);
		hour1temp = Math.round((hour1temp * 9/5) + 32);
		hour2temp = Math.round((hour2temp * 9/5) + 32);
		hour3temp = Math.round((hour3temp * 9/5) + 32);
		hour4temp = Math.round((hour4temp * 9/5) + 32);
		hour5temp = Math.round((hour5temp * 9/5) + 32);
		date1temp = Math.round((date1temp * 9/5) + 32);
		date2temp = Math.round((date2temp * 9/5) + 32);
		date3temp = Math.round((date3temp * 9/5) + 32);
		date4temp = Math.round((date4temp * 9/5) + 32);
		date5temp = Math.round((date5temp * 9/5) + 32);
		
		temp.innerHTML = currentTemp;
		document.getElementById(ht1).innerHTML = hour1temp + '°';
		document.getElementById(ht2).innerHTML = hour2temp + '°';
		document.getElementById(ht3).innerHTML = hour3temp + '°';
		document.getElementById(ht4).innerHTML = hour4temp + '°';
		document.getElementById(ht5).innerHTML = hour5temp + '°';
		document.getElementById(dt1).innerHTML = date1temp + '°';
		document.getElementById(dt2).innerHTML = date2temp + '°';
		document.getElementById(dt3).innerHTML = date3temp + '°';
		document.getElementById(dt4).innerHTML = date4temp + '°';
		document.getElementById(dt5).innerHTML = date5temp + '°';
		
		temptype.innerHTML = '°F';
	}
	else {
		currentTemp = Math.round((currentTemp - 32) * 5/9);
		hour1temp = Math.round((hour1temp - 32) * 5/9);
		hour2temp = Math.round((hour2temp - 32) * 5/9);
		hour3temp = Math.round((hour3temp - 32) * 5/9);
		hour4temp = Math.round((hour4temp - 32) * 5/9);
		hour5temp = Math.round((hour5temp - 32) * 5/9);
		date1temp = Math.round((date1temp - 32) * 5/9);
		date2temp = Math.round((date2temp - 32) * 5/9);
		date3temp = Math.round((date3temp - 32) * 5/9);
		date4temp = Math.round((date4temp - 32) * 5/9);
		date5temp = Math.round((date5temp - 32) * 5/9);

		temp.innerHTML = currentTemp;
		document.getElementById(ht1).innerHTML = hour1temp + '°';
		document.getElementById(ht2).innerHTML = hour2temp + '°';
		document.getElementById(ht3).innerHTML = hour3temp + '°';
		document.getElementById(ht4).innerHTML = hour4temp + '°';
		document.getElementById(ht5).innerHTML = hour5temp + '°';
		document.getElementById(dt1).innerHTML = date1temp + '°';
		document.getElementById(dt2).innerHTML = date2temp + '°';
		document.getElementById(dt3).innerHTML = date3temp + '°';
		document.getElementById(dt4).innerHTML = date4temp + '°';
		document.getElementById(dt5).innerHTML = date5temp + '°';
		
		temptype.innerHTML = '°C';
	}	
}	