
import breeds from "../data/dogbreed.mjs";



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
const randomImages = document.querySelector('.randomImages');

const businessList = document.querySelector('#businessList')

const us= 'https://api.thedogapi.com/v1/breeds';
const u = 'https://dog.ceo/api/breeds/list/all';
const uz = 'https://dog.ceo/api/breeds/image/random/10';
let response;

const dialog = document.querySelector('#dialog');


//document.querySelector('#button1').addEventListener('click', () => {
//    displayModal(response[0]);
//    dialog.showModal();
//});
//
//document.querySelector('#button2').addEventListener('click', () => {
//    displayModal(response[1]);
//    dialog.showModal();
//});


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
            console.log(response.message)
            displayRandom(response.message)
            };
        }
    
    catch (error) {
        console.log(error);
    }
}

let DogInfo;

async function getDogInformation(value) {
    const link = 'https://api.thedogapi.com/v1/breeds';

    try {
        const data = await fetch(link);

        if (data.ok) {
            DogInfo = await data.json();
            console.log(DogInfo)
            DogInfo.forEach(element => {
                if (element.name === value) {
                     let link = `https://dog.ceo/api/breed/${element.name.toLowerCase}/images`
                     getMembers(link)
                     displayDogInfo(element)
                }

            });
            console.log(dogn)
            };
        }
    
    catch (error) {
        console.log(error);
    }
}



getMembers(uz)

const breedName = document.querySelector('#breedName');

const buttonGet = document.querySelector('form span');
buttonGet.addEventListener('click', getDesiredBreed)


function displayRandom(list) {
    randomImages.innerHTML = ''
    let number = 1
    list.forEach(element => {
        if(number<12) {
        const image = document.createElement('img');
        console.log('g');
        image.src = element
        image.loading = 'lazy'
        randomImages.append(image);
        number++
        }
    });
}

function populateSelectField() {
    breeds.forEach(element => {
        const option = document.createElement('option')
        option.textContent = element
        option.value = element
        breedName.append(option)
    });
}


populateSelectField();

function getDesiredBreed() {

    const link2 = ` 'https://dog.ceo/api/breeds/image/random/10';`
    let value = breedName.options[breedName.selectedIndex].textContent
    console.log(value)
    getDogInformation(value)
}

const bredfor = document.querySelector('#bredfor');
const lifespan = document.querySelector('#lifespan');
const dogname = document.querySelector('#doginfo h2');
const origin = document.querySelector('#origin');
const temperament = document.querySelector('#temperament');
const breedgroup = document.querySelector('#breedgroup');

function displayDogInfo(element) {
    dogname.textContent = `Name : ${element.name}`
    lifespan.textContent = `Life Span : ${element.life_span}`
    bredfor.textContent = `Bred For : ${element.bred_for}`
    origin.textContent = `Origin : ${element.origin}`
    breedgroup.textContent = `Breed Group : ${element.breed_group}`
    temperament.textContent =  `Temperament : ${element.temperament}`
}