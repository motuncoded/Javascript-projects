const btn = document.querySelector("button");
const quote = document.querySelector("h1");

function generateAdvice() {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote.innerHTML = '"' + data.content + '"';
    });
}

btn.addEventListener("click", () => {
  generateAdvice();
});
