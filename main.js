const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const result = document.querySelector(".output");

const summationButton = document.querySelector(".summationButton");
const substractionButton = document.querySelector(".substractionButton");
const multiplicationButton = document.querySelector(".multiplicationButton");
const divisionButton = document.querySelector(".divisionButton");

summationButton.addEventListener("click", function(){
    result.innerText = (+input1.value + +input2.value).toFixed(2);
})

substractionButton.addEventListener("click", function(){
    result.innerText = (+input1.value - +input2.value).toFixed(2);
})

multiplicationButton.addEventListener("click", function(){
    result.innerText = (+input1.value * +input2.value).toFixed(2);
})

divisionButton.addEventListener("click", function(){
    result.innerText = (+input1.value / +input2.value).toFixed(2);
})

result.addEventListener("click", function(){
    result.innerText = Math.sqrt(+result.innerText).toFixed(2);
})