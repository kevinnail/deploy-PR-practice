// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const yourName = document.getElementById('yourName');
let result = document.getElementById('result');
const form1 = document.getElementById('form1');
const displayName = document.getElementById('name-display');

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', () => {
    if (check(yourName) === true) {
        result.textContent = yourName.value;
        form1.classList.toggle('hide');
        displayName.classList.toggle('hide');
        displayName.classList.add('name-display-class');
        yourName.value = '';
    } else {
        alert('You must enter a name.');
    }
});

btn2.addEventListener('click', () => {
    form1.classList.toggle('hide');
    displayName.classList.toggle('hide');
    displayName.classList.remove('name-display-class');
    // console.log(displayName.classList);
});

function check(yourName) {
    if (yourName.value === '') {
        return false;
    } else {
        return true;
    }
}

// /////////////////////////////////////
//      rotate div elements action
// //////////////////////////////////////

const animateBtn = document.getElementById('animate-btn');
const animateBtn2 = document.getElementById('animate-btn2');
const div1 = document.getElementById('rotate1');
const div2 = document.getElementById('rotate2');
const div3 = document.getElementById('rotate3');

animateBtn.addEventListener('click', () => {
    // div1.classList.add('move1');
    // div2.classList.add('move2');
    // div3.classList.add('move3');
    div1.classList.add('animate1');
    div2.classList.add('animate2');
    div3.classList.add('animate3');
    animateBtn.style.transform = 'scale(0)';
    animateBtn2.style.transform = 'scale(1)';
    let i = 100;
    while (i > 0) {
        animateBtn.style.top = i + 'px';
        animateBtn.style.left = i + 'px';
        i--;
    }
    while (i < 431) {
        animateBtn2.style.top = i + 'px';
        animateBtn2.style.left = i + 'px';
        i++;
    }
});

animateBtn2.addEventListener('click', () => {
    div1.classList.remove('move1');
    div2.classList.remove('move2');
    // div3.classList.remove('move3');
    div1.classList.remove('animate1');
    div2.classList.remove('animate2');
    div3.classList.remove('animate3');

    animateBtn.style.transform = 'scale(1)';
    animateBtn2.style.transform = 'scale(0)';

    let i = 100;
    while (i > 0) {
        animateBtn2.style.top = i + 'px';
        animateBtn2.style.left = i + 'px';

        i--;
    }

    while (i < 431) {
        animateBtn.style.top = i + 'px';
        animateBtn.style.left = i + 'px';
        i++;
    }
});

// add <li> element to <ul>

const nameList = document.querySelector('.list-exp');
const nameInput = document.querySelector('.name-input');
const addListBtn = document.querySelector('.add-list-btn');

addListBtn.addEventListener('click', () => {
    const newLi = document.createElement('li');
    const liContent = document.createTextNode(nameInput.value);
    newLi.append(liContent);
    nameList.append(newLi);
});
