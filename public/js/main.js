

const standingChoice = document.querySelector(".standing-choice")
const standings = document.querySelector(".group")
const fixuturesChoice = document.querySelector(".fixures-choice")
const fixtures = document.querySelector(".fixures")


standingChoice.addEventListener("click", toggleDisplay)

function toggleDisplay(){

    standings.classList.toggle("display-none")

}

fixuturesChoice.addEventListener("click", () => {
    fixtures.classList.toggle("display-none")
} )