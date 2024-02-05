const btn = document.querySelector("button");
const color = document.querySelector("#color");

btn.addEventListener("click", () => {
  generateHex();
  generateRgb();
});

function generateHex() {
  //  for HEX COLORS
  const letters = "0123456789ABCDEF";
  let colour = "#";

  for (let i = 0; i < 6; i++) {
    let randomColor = Math.floor(Math.random() * 16);
    colour += letters[randomColor];
    colorRandom = colour;
  }
  console.log(colour);

  document.body.style.backgroundColor = colorRandom;
  color.innerHTML = colour;
}
