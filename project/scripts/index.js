const year = document.querySelector("#currentYear");

let lastModified = document.querySelector("#lastModified")

const today = new Date();
// this statement below is to get the current year in the footer
year.innerHTML = today.getFullYear();

// this statement is to get the last modified string in the footer
lastModified.innerHTML = new Date(document.lastModified);


const navi = document.querySelector('#navi');
const menu = document.querySelector('#menuBar');

menu.addEventListener('click', function () {
    navi.classList.toggle("show");
    menu.classList.toggle("show");
})

const businessList = document.querySelector('#businessList')

const url = 'https://israelmobote.github.io/wdd231/chamber/data/members.json';
let response;

const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=6.53&lon=3.37&units=metric&appid=3707d031b693ba1a997378fffcf8b394';
async function apiFetch() {

    try {
        const response = await fetch(url2);
        if (response.ok) {
            data = await response.json();
            displayCurrentWeather();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }

    try {
        const response = await fetch(url3);
        if (response.ok) {
            datatwo = await response.json();
            displayWeatherForecast();
            console.log(datatwo);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }




}
