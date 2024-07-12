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

async function getMembers(link) {
    try {
        const data = await fetch(link);

        if (data.ok) {
            response = await data.json();
            getBusinessesGrid(response);
        }
    }
    catch (error) {
        console.log(error);
    }
}

let data;
let datatwo;

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

const url3 = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.53&lon=3.37&units=metric&appid=3707d031b693ba1a997378fffcf8b394';


apiFetch();
const weatherSection = document.querySelector('#current-weather');
const forecastSection = document.querySelector('#weather-forecast');

function displayCurrentWeather() {

    const weatherIcon = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon for current weather which is ${data.weather[0].description}`);
    weatherIcon.setAttribute('width', 100);
    weatherSection.append(weatherIcon);

    const weatherSubSection = document.createElement('div');

    const temp = document.createElement('p');
    temp.innerHTML = `${data.main.temp}&deg;C`;

    const description = document.createElement('p');
    description.textContent = data.weather[0].description;

    const hightemp = document.createElement('p');
    hightemp.textContent = `High: ${data.main.temp_max}`;

    const lowtemp = document.createElement('p');
    lowtemp.textContent = `Low: ${data.main.temp_min}`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}`;

    weatherSubSection.append(temp);
    weatherSubSection.append(description);
    weatherSubSection.append(hightemp);
    weatherSubSection.append(lowtemp);
    weatherSubSection.append(humidity);

    weatherSection.append(weatherSubSection);
}

function displayWeatherForecast() {

    const now = new Date();
    daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


    const todayTemp = document.createElement('p');
    todayTemp.innerHTML = `Today: <span>${datatwo.list[0].main.temp}&deg;C</span>`;

    
    let nextday = now.getDay() + 1;
    if (nextday>6) {
        nextday -= 7;
    }
    let twodaysAfter = now.getDay() + 2;
    if (twodaysAfter>6) {
        twodaysAfter -= 7;
    }

    const nextdayTemp = document.createElement('p');
    nextdayTemp.innerHTML = `${daysOfWeek[nextday]}: <span>${datatwo.list[8].main.temp}&deg;C</span>`;

    const twodaysAfterTemp = document.createElement('p');
    twodaysAfterTemp.innerHTML = `${daysOfWeek[twodaysAfter]}: <span>${datatwo.list[16].main.temp}&deg;C</span>`;

    forecastSection.append(todayTemp);
    forecastSection.append(nextdayTemp);
    forecastSection.append(twodaysAfterTemp);

}


const url4 = 'https://israelmobote.github.io/wdd231/chamber/data/members.json';
let randomIndexList = [];



async function getSpotlightMembers(link) {
    try {
    const data = await fetch(link);
    
    if (data.ok) {
         const members = await data.json();
         const spotlightMembers = members.filter(member => member.membership > 1);
         while(randomIndexList.length<2){
            let num = 0;
            randomIndex = (Math.random()*(4)).toFixed();
            console.log(randomIndex);
            if (randomIndex == randomIndexList[0]) {
                num = 1;
            }
            if(num==0) {
            randomIndexList.push(randomIndex);
            }
            console.log(randomIndexList);
        }
        displaySpotlightMembers(spotlightMembers);
        }
    }
    catch (error) {
        console.log(error);
    }
}

getSpotlightMembers(url4);
const membersSpotlight = document.querySelector('#members');

function displaySpotlightMembers(list) {
           // I used the line of code below to make the members spotlight div empty for every click on the display buttons
        // So that new values will be added and will not join with the old ones.
       
    randomIndexList.forEach(index => {
       let member = list[index];


        const divi2 = document.createElement('div');

        const address = document.createElement('p');
        address.textContent = member.address;

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = member.phoneNumber;

        const websiteURL = document.createElement('a');
            websiteURL.setAttribute('href', member.website);
            websiteURL.textContent = member.website;

            divi2.append(address);
            divi2.append(phoneNumber);
            divi2.append(websiteURL);

            const divi = document.createElement('div');

            const image = document.createElement('img');
            image.setAttribute('src', member.image);
            image.setAttribute('alt', `An image representing the logo of ${member.name}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', 100);
            image.setAttribute('height', 100);

            divi.append(image);
            divi.append(divi2);

            const name = document.createElement('h3');
            name.textContent = member.name;

            const divmain = document.createElement('div')
            divmain.append(name);
            divmain.append(divi);

            membersSpotlight.append(divmain);

    });
}

