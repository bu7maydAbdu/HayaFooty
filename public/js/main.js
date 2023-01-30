

const standingChoice = document.querySelector(".standing-choice")
const standings = document.querySelector(".group")
const fixuturesChoice = document.querySelector(".fixures-choice")
const fixtures = document.querySelector(".fixures")
const carrets = document.querySelectorAll(".carrets")

// console.log(carrets)
    

standingChoice.addEventListener("click", toggleDisplay)

function toggleDisplay(){
   
    standings.classList.toggle("display-none")
    // console.log(this)
    const thisCarret = this.querySelectorAll(".carrets")

    thisCarret.forEach(carret => {
        // console.log(carret)
      carret.classList.toggle("fa-angles-down")
      carret.classList.toggle("fa-angles-up")

    })
    



}

fixuturesChoice.addEventListener("click", displayFixtures )


function displayFixtures (){
  


        fixtures.classList.toggle("display-none")
        // console.log(this)
        const thisCarret = this.querySelectorAll(".carrets")
    
        thisCarret.forEach(carret => {
            // console.log(carret)
            carret.classList.toggle("fa-angles-down")
            carret.classList.toggle("fa-angles-up")
      
          })
    
    

}


