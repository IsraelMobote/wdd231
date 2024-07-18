const memberCards = document.querySelector('#membershipCards');

const memberlevel = [
    {
        name: 'Non Profit Membership Level',
        description: `this is the level for non-profit organizations. It is accompanied by significant benefits which includes 
    free training for staffs, 50% discount on the chamber's event tickets and advertisement on the directory page of the website` ,
        fee: '$200'
    },
    {
        name: 'Bronze Membership Level',
        description: `this is the level for a normal member of the chamber. It's benefits includes free training for staffs 
    and free advertisement on the directory page of the website`,
        fee: '$500'
    },
    {
        name: 'Silver Membership Level',
        description: `this is the level for an advanced member of the chamber. It's benefits includes free training for staffs, 50% discount
    on the chamber's event tickets and free advertisement on the website's HomePage and directory page` ,
        fee: '$1000'
    },
    {
        name: 'Gold Membership Level',
        description: `this is the level for an elite member of the chamber. It's benefits includes free training for staffs, 75% discount
    on the chamber's event tickets and free advertisement on the website's HomePage and directory page. This member also gets a spot in the chamber board of directors`  ,
        fee: '$2000'
    }
]
function displayCards() {
    memberCards.innerHTML = '';
    memberlevel.forEach(element => {
        content = document.createElement('div')

        para = document.createElement('p')
        para.innerHTML = element.name
        button = document.createElement('button')
        button.innerHTML = 'Learn More';
        button.addEventListener('click', () => {
            displayModal(element)
            dialog.showModal()
        })

        content.append(para)
        content.append(button)
        memberCards.append(content)
    });
}

displayCards();

const dialog = document.querySelector('#dialog');


function displayModal(x) {
    dialog.innerHTML = `
    <button>✖</button>
    <p>${x.name}</p>
    <h2>Benefits</h2>
    <p class='benefit' >${x.description}</p>
     <p>Yearly Fee : ${x.fee}</p>`

     const myclose = document.querySelector('#dialog button')
     myclose.addEventListener('click', () => {
        dialog.close()
     })
}