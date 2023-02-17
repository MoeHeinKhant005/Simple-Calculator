const numberDisplay = document.querySelector('.numberDisplay');
const numberBtns = document.querySelectorAll('.numberBtn');
const operatorBtns = document.querySelectorAll('.operatorBtn');
const divideBtn = document.querySelector('.divideBtn');
const delBtn = document.querySelector('.delBtn');
const eqlBtn = document.querySelector('.equalBtn');

numberBtns.forEach(btn => btn.addEventListener('click', e => {
    numberDisplay.value += e.currentTarget.textContent;
}))

operatorBtns.forEach(btn => btn.addEventListener('click', e => {
    numberDisplay.value += e.currentTarget.textContent;
}))

divideBtn.addEventListener('click',e => numberDisplay.value += "/")

delBtn.addEventListener('click', e => numberDisplay.value = "");

eqlBtn.addEventListener('click', e => {
    let result = eval(String(numberDisplay.value));
    numberDisplay.value = result;
})