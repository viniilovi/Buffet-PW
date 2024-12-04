const buttonQuantity = document.getElementsByClassName("div-buttons-main")[0].childElementCount;

let changeBgCounter = 2 
let i = 0;
let j = 1;
let positionStatement = 0
const NavMediaQuery = window.matchMedia("(min-width: 801px)")

function changeBg() {
      if(changeBgCounter == (buttonQuantity+1)){
            changeBgCounter = 1
            for(i = 0; i<buttonQuantity; i++){
                  document.getElementById("button-change-bg-"+(i+1)).style.backgroundColor = "transparent"
                  console.log("i"+i)
                  document.getElementById("background-image-main-"+(i+1)).style.zIndex = "0"
                  document.getElementById("background-image-main-"+(i+1)).style.animationName = "none"
            }
      }
      if(changeBgCounter == 1){

            document.getElementById("background-image-main-"+(changeBgCounter)).style.zIndex = 998
            document.getElementById("background-image-main-"+(changeBgCounter)).style.animationName = "background-opacity"

            document.getElementById("button-change-bg-"+(changeBgCounter)).style.backgroundColor = "white"
      }else{
            document.getElementById("button-change-bg-"+(changeBgCounter-1)).style.backgroundColor = "transparent"

            document.getElementById("background-image-main-"+(changeBgCounter-1)).style.zIndex = 997
            document.getElementById("background-image-main-"+(changeBgCounter-1)).style.animationName = "none"
            document.getElementById("background-image-main-"+(changeBgCounter)).style.zIndex = 998
            document.getElementById("background-image-main-"+(changeBgCounter)).style.animationName = "background-opacity"

            document.getElementById("button-change-bg-"+(changeBgCounter)).style.backgroundColor = "white"
      }
      console.log(changeBgCounter)
      changeBgCounter++
}

function onClickChangeBg(evento){
      let buttonIdString = evento.target.id
      let buttonNumber = buttonIdString.match(/\d/)
      changeBgCounter = buttonNumber[0];
      for(i = 0; i<buttonQuantity; i++){
            if(i != (buttonNumber-1)){
                  document.getElementById("background-image-main-"+(i+1)).style.zIndex = "0"
                  document.getElementById("background-image-main-"+(i+1)).style.animationName = "none"
                  document.getElementById("button-change-bg-"+(i+1)).style.backgroundColor = "transparent"
            }else{
                  document.getElementById("background-image-main-"+(changeBgCounter)).style.zIndex = 998
                  document.getElementById("background-image-main-"+(changeBgCounter)).style.animationName = "background-opacity"
                  document.getElementById(buttonIdString).style.backgroundColor = "white"
            }
      }
}

function onClickChangeCard(evento){
      let buttonIdStatement = evento.target.id
      let buttonNumberStatement = buttonIdStatement.match(/\d/)
      console.log(buttonNumberStatement[0])
      positionStatement = buttonNumberStatement[0]
      if(buttonNumberStatement[0] == 1){

            document.getElementById("statement-box-button-1").classList.add("statement-box-button-active")
            document.getElementById("statement-box-button-2").classList.remove("statement-box-button-active")
            document.getElementById("statement-box-button-3").classList.remove("statement-box-button-active")


            for(i = 0; i<3; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "grid"
                  if(i == 2){
                        document.getElementById("statement-card-"+(i+1)).classList.add("last-visible-statement-card")
                  }
            }
            for(i = 3; i<9; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "none"
                  document.getElementById("statement-card-"+(i+1)).classList.remove("last-visible-statement-card")
            }
      }
      if(buttonNumberStatement[0] == 2){

            document.getElementById("statement-box-button-1").classList.remove("statement-box-button-active")
            document.getElementById("statement-box-button-2").classList.add("statement-box-button-active")
            document.getElementById("statement-box-button-3").classList.remove("statement-box-button-active")

            for(i = 3; i<6; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "grid"
                  if(i == 5){
                        document.getElementById("statement-card-"+(i+1)).classList.add("last-visible-statement-card")
                  }
            }
            for(i = 0; i<3; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "none"
                  document.getElementById("statement-card-"+(i+1)).classList.remove("last-visible-statement-card")
            }
            for(i = 6; i<9; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "none"
                  document.getElementById("statement-card-"+(i+1)).classList.remove("last-visible-statement-card")
            }
      }
      if(buttonNumberStatement[0] == 3){

            document.getElementById("statement-box-button-1").classList.remove("statement-box-button-active")
            document.getElementById("statement-box-button-2").classList.remove("statement-box-button-active")
            document.getElementById("statement-box-button-3").classList.add("statement-box-button-active")

            for(i = 6; i<9; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "grid"
                  if(i == 8){
                        document.getElementById("statement-card-"+(i+1)).classList.add("last-visible-statement-card")
                  }
            }
            for(i = 0; i<6; i++){
                  document.getElementById("statement-card-"+(i+1)).style.display = "none"
                  document.getElementById("statement-card-"+(i+1)).classList.remove("last-visible-statement-card")
            }
      }
}

function openMobileNavMenu() {

      if(document.getElementById("nav-header-mobile").style.display === "none"){
            document.getElementById("nav-header-mobile").style.display = "flex"
      }else{
            document.getElementById("nav-header-mobile").style.display = "none"
      }
}

function closeMobileNavMenuAt800pxWidth() {
      if (NavMediaQuery.matches) {
            document.getElementById("nav-header-mobile").style.display = "none"
      }
}


NavMediaQuery.addEventListener("change", function() {
      closeMobileNavMenuAt800pxWidth(NavMediaQuery);
    }); 


setInterval(changeBg, 5000)
closeMobileNavMenuAt800pxWidth();

