const btn = document.querySelector("button");
const color = document.querySelector("#color");

btn.addEventListener("click", () => {
  generateHex();
});

function generateHex() {
  //  for HEX COLORS
  const letters1 = "0123456789ABCDEF";
  let colour1 = "#";

  for (let i = 0; i < 6; i++) {
    let randomColor1 = Math.floor(Math.random() * 16);
    colour1 += letters1[randomColor1];
  }
  const letters2 = "0123456789ABCDEF";
  let colour2 = "#";

  for (let i = 0; i < 6; i++) {
    let randomColor2 = Math.floor(Math.random() * 16);
    colour2 += letters2[randomColor2];
  }
  var colouring = "linear-gradient(" + colour1 + "," + colour2 + ")";

  document.body.style.background = colouring;
  color.innerText = "linear-gradient(" + colour1 + "," + colour2 + ")";
}
