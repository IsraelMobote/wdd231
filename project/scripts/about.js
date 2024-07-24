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

const url = 'https://israelmobote.github.io/wdd231/project/data/aboutdata.json';
let response;

const dialog = document.querySelector('#dialog');


document.querySelector('#button1').addEventListener('click', () => {
    displayModal(response[0]);
    dialog.showModal();
});

document.querySelector('#button2').addEventListener('click', () => {
    displayModal(response[1]);
    dialog.showModal();
});


function displayModal(x) {
    dialog.innerHTML = `
    <button>✖</button>
    <p>${x.name}</p>
    <h2>Benefits</h2>
    <p class='benefit' >${x.description}</p>`

     const myclose = document.querySelector('#dialog button')
     myclose.addEventListener('click', () => {
        dialog.close()
     })
}


async function getMembers(link) {
    try {
        const data = await fetch(link);

        if (data.ok) {
            response = await data.json();
            console.log(response)
        }
    }
    catch (error) {
        console.log(error);
    }
}

getMembers(url);