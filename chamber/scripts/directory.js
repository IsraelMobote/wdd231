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

getMembers(url);

function getBusinessesGrid(membersList) {

    if (checknumber === 1) {
        businessList.classList.toggle('list');
        checknumber = 0;
    }

     // I used the line of code below to make the business list empty for every click on the display buttons
    // So that new values will be added and will not join with the old ones.
    businessList.innerHTML = '';


    membersList.forEach(member => {
        const image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `An image representing the logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', 200);
        image.setAttribute('height', 75);

        const address = document.createElement('p');
        address.textContent = member.address;

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = member.phoneNumber;

        const websiteURL = document.createElement('a');
        websiteURL.setAttribute('href', member.website);
        websiteURL.textContent = member.website;

        const memberGrid = document.createElement('div');
        memberGrid.append(image);
        memberGrid.append(address);
        memberGrid.append(phoneNumber);
        memberGrid.append(websiteURL);

        businessList.append(memberGrid);
    });
}


function getBusinessesList(membersList) {

    if (checknumber === 0) {
        businessList.classList.toggle('list');
        checknumber = 1;
    }

    // I used this number to alternate the background colors of the members in the list by giving them
    // different classes
    let specialNumber = 0

    // I added the class 'list' to the business list so that I can style it differently from that of 
    // grid

    // I used the line of code below to make the business list empty for every click on the display buttons
    // So that new values will be added and will not join with the old ones.
    businessList.innerHTML = '';

    membersList.forEach(member => {

        specialNumber++;

        const name = document.createElement('p');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = member.address;

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = member.phoneNumber;

        const websiteURL = document.createElement('a');
        websiteURL.setAttribute('href', member.website);
        websiteURL.textContent = member.website;

        const memberGrid = document.createElement('div');
        

        memberGrid.append(name);
        memberGrid.append(address);
        memberGrid.append(phoneNumber);
        memberGrid.append(websiteURL);

        if (specialNumber % 2 === 0) {
            memberGrid.classList.toggle('evenList');
        }
        else {
            memberGrid.classList.toggle('oddList');
        }

        businessList.append(memberGrid);
    });
}

let checknumber = 0;

document.querySelector('#grid').addEventListener('click', function() {
    getBusinessesGrid(response);
});

document.querySelector('#list').addEventListener('click', function() {
    getBusinessesList(response);
});