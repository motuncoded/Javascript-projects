const btn = document.querySelector("button");



function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json()
            
        }).then((data) => {
            const adviceMessage = data["slip"];
            quote.innerHTML = adviceMessage["advice"]
    })
}




btn.addEventListener("click", () => {
    generateAdvice()
})