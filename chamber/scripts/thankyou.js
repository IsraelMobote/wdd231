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

const response = window.location.href;

const everything = response.split('?');

const data = everything[1].split('&');

function show(x) {
    let  val;
    data.forEach(element => {
        if(element.startsWith(x)) {
            val = element.split('=')[1].replace('%40','@');
        }
    });
    return val;
}

function getTimeStamp() {
    let val;
    data.forEach(element => {
        if(element.startsWith('time')) {
            val = element.replaceAll('%3A',':').replaceAll('+',' ').replaceAll('%2F','-')
            val = val.split('=')[1]
        }
    });
    return val;
}



let inputs = document.querySelector('#userInputs');
inputs.innerHTML = `
<p>First Name : <span>${show('first')}</span></p>
<p>Last Name : <span>${show('last')}</span></p>
<p>Email : <span>${show('email')}</span></p>
<p>Phone Number : <span>${show('phone')}</span></p>
<p>Organization : <span>${show('business')}</span></p>
<p>Current Date : <span>${getTimeStamp()}</span></p>`;