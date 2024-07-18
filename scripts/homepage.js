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



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const creditAll = [2, 2, 2, 2, 2, 2];
const creditCSE = [2, 2, 2];
const number = creditAll.reduce(myfun);
const csenumber = creditCSE.reduce(myfun);

function myfun(total, numb) {
    return total + numb;
};

let finalNum = number;

const coursesDiv = document.querySelector('#courseList');

function getCourses(list) {

    coursesDiv.innerHTML = '';
    list.forEach(course => {
        const paragraph = document.createElement('p');
        paragraph.addEventListener('click', () => displayModal(course))
        paragraph.textContent = `${course.subject} ${course.number}`;

        if (course.completed === false) {
            paragraph.classList.toggle("notCompleted");
        }

        coursesDiv.append(paragraph);
    });
    const para = document.createElement('p');
    para.textContent = `Total Credits: ${finalNum}`;

    para.classList.toggle("credits");

    coursesDiv.append(para);
}

function getCSEcourses() {
    const newList = courses.filter(course => course.subject === 'CSE');
    getCourses(newList);
}

function getWDDcourses() {
    const newList = courses.filter(course => course.subject === 'WDD');
    getCourses(newList);
}


// I used 0 and 1 to represent the state of the courses button in the webpage,
// 0 means inactive while 1 means active.
let activeForAll = 0;
let activeForCSE = 0;
let activeForWDD = 0;

document.querySelector('#onlyCSE').addEventListener('click', function () {
    finalNum = csenumber;
    getCSEcourses();

    document.querySelector('#onlyCSE').classList.toggle('active');
    activeForCSE = 1;
    if (activeForAll == 1) {
        document.querySelector('#showAll').classList.toggle('active');
        activeForAll = 0;
    }

    if (activeForWDD == 1) {
        document.querySelector('#onlyWDD').classList.toggle('active');
        activeForWDD = 0;
    }

});


document.querySelector('#onlyWDD').addEventListener('click', function () {
    finalNum = csenumber;
    getWDDcourses();

    document.querySelector('#onlyWDD').classList.toggle('active');
    activeForWDD = 1;
    if (activeForAll == 1) {
        document.querySelector('#showAll').classList.toggle('active');
        activeForAll = 0;
    }

    if (activeForCSE == 1) {
        document.querySelector('#onlyCSE').classList.toggle('active');
        activeForCSE = 0;
    }

});

document.querySelector('#showAll').addEventListener('click', function () {
    finalNum = number;
    getCourses(courses);

    document.querySelector('#showAll').classList.toggle('active');
    activeForAll = 1;
    if (activeForCSE == 1) {
        document.querySelector('#onlyCSE').classList.toggle('active');
        activeForCSE = 0;
    }

    if (activeForWDD == 1) {
        document.querySelector('#onlyWDD').classList.toggle('active');
        activeForWDD = 0;
    }
});

getCourses(courses);
const dialog = document.querySelector('#courseDetails')
function displayModal(data) {
    dialog.innerHTML = '';

    const subjectandNumber = document.createElement('p')
    subjectandNumber.textContent = `${data.subject} ${data.number}`

    const title = document.createElement('p')
    title.textContent = data.title

    const credits = document.createElement('p')
    credits.textContent = data.credits

    const description = document.createElement('p')
    description.textContent = data.description

    const certificate = document.createElement('p')
    certificate.textContent = data.certificate

    dialog.append(subjectandNumber);
    dialog.append(title);
    dialog.append(credits);
    dialog.append(description);
    dialog.append(certificate);
    dialog.showModal();

    const myclose = document.createElement('button')
    myclose.innerHTML = '✖';
    dialog.append(myclose);

    myclose.addEventListener('click', () => {
        dialog.close();
    })

}

