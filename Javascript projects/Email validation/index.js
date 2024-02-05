const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");
const form = document.querySelector("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const handleInput = (item) => {
  if (input.value === "") {
    input.style.border = `2px solid #d90429`;
    para.innerText = "Please input your email!";
    para.style.color = `#8d99ae`;
  } else if (input.value.match(validRegex)) {
    para.innerText = "Thank you for subscribing!";
    form.classList.add("hidden");
    return true;
  } else {
    para.innerText = "Invalid email!";
    para.style.color = `#d90429`;
  }
};
