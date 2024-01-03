const btn = document.querySelector("button");
const number = document.querySelector(".number");

const generateNumber = () => {
  let random = Math.floor(Math.random() * 50);
  number.innerHTML = random;
};

btn.addEventListener("click", () => {
  generateNumber();
});
