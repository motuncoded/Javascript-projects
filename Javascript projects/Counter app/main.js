const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

let number = document.querySelector(".number");

let count = 0;
increase.addEventListener("click", () => {
  count++;
  number.innerHTML = count;
  number.style.color = "#03045e";
});
decrease.addEventListener("click", () => {
  count--;
  number.innerHTML = count;
  if (count < 1) {
    number.style.color = "#ef233c";
  } else if (count >= 1) {
    number.style.color = "#03045e";
  } else {
    return false;
  }
});
reset.addEventListener("click", () => {
  count = 0;
  number.innerHTML = count;
  number.style.color = "#ffff";
});
