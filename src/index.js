"use strict";
// const userName: string = 'Anna'
// console.log(userName)
// const age: number = 25
// console.log(age)
// const isHappy: boolean = true
// console.log('isHappy :>> ', isHappy)
// console.log(`${userName} ${age}`)
// for (let m = 1; m < 11; m++) {
//   if (m % 2 === 0) console.log(`Number of the for loop: ${m}`)
// }
// for (let i = 1; i > -11; i--) {
//   console.log(`Number of the for loop: ${i}`)
// }
// -----------------
const form = document.querySelector('#factorial-form');
const steps = document.querySelector('#factorial-steps');
form.addEventListener('submit', e => {
    e.preventDefault();
    steps.textContent = '';
    const numberInput = document.querySelector('#number');
    const number = Number(numberInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        const listItem = document.createElement('li');
        listItem.textContent = `${factorial}`;
        steps.appendChild(listItem);
    }
});
