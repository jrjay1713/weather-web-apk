const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const wind = document.getElementById('wind');
const humidity = document.gerElementById('humidity');

function checkWeather(city){
    const api_key = "b7eabc2693e258e6be021748a736697c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    console.log(checkWeather);
}

searchBtn.addEventListenerf('click', ()=>{
    checkWeather(inputBox.value);
});
