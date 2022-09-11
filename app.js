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
    div1.classList.add('move1');
    div2.classList.add('move2');
    // div3.classList.add('move3');
    div3.classList.add('animate');
});

animateBtn2.addEventListener('click', () => {
    div1.classList.remove('move1');
    div2.classList.remove('move2');
    // div3.classList.remove('move3');
    div3.classList.remove('animate');
});
