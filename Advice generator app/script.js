const btn = document.querySelector("button");

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceMessage = data["slip"];
      advice.innerHTML = adviceMessage["advice"];
    })
    .catch(() => {
      alert("Error!!!");
    });
}

btn.addEventListener("click", () => {
  generateAdvice();
});
