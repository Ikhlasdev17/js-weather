"use strict"
const api = {
  key: 'a045a1a5356155dc5712ab1318762afa',
  baseurl: 'api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery);

function setQuery(e) {
  if(e.keyCode === 13) {
    console.log(searchBox.value)
  }
}