let input = document.getElementsByClassName("input");
let btn = document.getElementById("btn");
let paragraph = document.getElementsByClassName("paragraph");
let inputArray = [];

function storeValue() {
  let inputValue = input.value;
  let inputGrab = inputArray.push(inputValue);
  paragraph.innerText = inputGrab;
}
