"use strict"
const api = {
  key: 'a045a1a5356155dc5712ab1318762afa',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery);

function setQuery(e) {
  if(e.keyCode === 13) {
    getResults(searchBox.value)
    console.log(searchBox.value)
  }
};

function getResults (query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    })
    .then(displayResults);
}


function displayResults(weather) {
  console.log(weather);
  // change city name
  let city = document.querySelector('.location .city')
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  // chane time
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerHTML = dateBuilder(now);
  // change temp
  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`
  // change temp name
  let weatherEl = document.querySelector(".weather");
  weatherEl.innerHTML = weather.weather[0].main;

  // change hi low
  let hiLow = document.querySelector('.hi-low');
  hiLow.innerHTML = `${Math.round(weather.main.temp_min)}<span>°C</span> / ${Math.round(weather.main.temp_max)}<span>°C</span>`
}

function dateBuilder(s) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[s.getDay()];
  let date = s.getDate();
  let month = months[s.getMonth()];
  let year = s.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}