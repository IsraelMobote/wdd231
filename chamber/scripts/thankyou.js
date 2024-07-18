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
console.log(response);

const everything = response.split('?');
console.log(everything);

const data = everything[1].split('&');
console.log(data);

function show(x) {
    let  val;
    data.forEach(element => {
        if(element.startsWith(x)) {
            console.log(element);
            val = element.split('=')[1].replace('%40','@');
        }
    });
    return val;
}

const val = show('last');

let inputs = document.querySelector('#userInputs');
inputs.innerHTML = `
<p>First Name : <span>${show('first')}</span></p>
<p>Last Name : <span>${show('last')}</span></p>
<p>Email : <span>${show('email')}</span></p>
<p>Phone Number : <span>${show('phone')}</span></p>
<p>Organization : <span>${show('business')}</span></p>
<p>Membership Level : <span>${show('membership')}</span></p>`