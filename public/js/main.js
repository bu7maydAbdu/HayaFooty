

const standingChoice = document.querySelector(".standing-choice")
const standings = document.querySelector(".group")
const fixuturesChoice = document.querySelector(".fixures-choice")
const fixtures = document.querySelector(".fixures")
const carrets = document.querySelectorAll(".carrets")
const playersStatsChoice = document.querySelector(".players-stats-choice")
const playersStats = document.querySelector(".players-stats")
const sidebarButton =  document.querySelector(".fa-bars")



// console.log(carrets)
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
if(standingChoice){
standingChoice.addEventListener("click", toggleDisplay)
}


if(fixuturesChoice){
fixuturesChoice.addEventListener("click", displayFixtures )

}


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



if(playersStatsChoice){
playersStatsChoice.addEventListener("click", displayPlayersStats )
}



function displayPlayersStats(){

  playersStats.classList.toggle("display-none")
  // console.log(this)
  const thisCarret = this.querySelectorAll(".carrets")

  thisCarret.forEach(carret => {
      // console.log(carret)
      carret.classList.toggle("fa-angles-down")
      carret.classList.toggle("fa-angles-up")

    })
}




// sidebar section 




if(sidebarButton){
  sidebarButton.addEventListener("click",toggleSideBar)
}else {
  console.log("btn not working")
}



console.log(sidebarButton)


function toggleSideBar(){
  const sidebar = document.querySelector(".sidebar")
  console.log(sidebar)
  console.log("hi")
  if(sidebar){
    sidebar.classList.toggle("open-active")

  }else {
    console.log("not reached")
  }
}


// function toggleActive(e){
//   console.log(e.propertyName)
//   if(e.propertyName.includes("flex")){
//     this.classList.toggle("open-active")
//   }
// }