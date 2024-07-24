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

let condition = 0;
const businessList = document.querySelector('#businessList');


let numOfDays;

let currentHour = today.getHours();
let currentDay = today.getDate();

let previousDay = localStorage.getItem('previousDay');
let previousHour = localStorage.getItem('previousHour');




if (previousDay >= 0) {

    if (currentDay > previousDay) {
        number = currentDay - previousDay
        if (number > 1) {
            condition = 2;
            numOfDays = number
        }
        else if (number == 1) {
            if (currentHour > previousHour) {
                condition = 2
                numOfDays = 1
            }
            else if (currentHour < previousHour) {
                condition = 1
            }
        }
    }
}

if (currentDay == previousDay) {
    condition = 1
}

if ( previousDay == null) {
    condition = 0
}

const span = document.querySelector('.discoverGrid h2 span');
displayMessage(condition);

localStorage.setItem('previousDay', currentDay);
localStorage.setItem('previousHour', currentHour);


function displayMessage(state) {
    if (state == 0) {
        span.textContent = 'Welcome! Let us know if you have any questions';
    }

    else if (state == 1) {
        span.textContent = 'Back so soon! Awesome!';
    }
    else if (state = 2) {
        if (numOfDays == 1) {
            span.textContent = `You last visited ${numOfDays} day ago`
        }
        else if (numOfDays > 1) {
            span.textContent = `You last visited ${numOfDays} days ago`
        }
    }
}
