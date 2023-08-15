const increase = document.querySelector(".increase")
const decrease = document.querySelector('.decrease');

let number = document.querySelector(".number")

let count = 0
increase.addEventListener("click", () => {
    count++
    number.innerHTML = count
    number.classList.add("blue")
})
decrease.addEventListener('click', () => {
	count--;
    number.innerHTML = count;
    if (count <= 1) {
        number.classList.add('red');


    } else if (count >= 1) {
            number.classList.remove('red');

    number.classList.add('blue');

    }
});
