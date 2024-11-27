const buttonQuantity = document.getElementsByClassName("div-buttons-about-us")[0].childElementCount;
let changeBgCounter = 2 
let i = 0;

function changeBg() {
      if(changeBgCounter == (buttonQuantity+1)){
            changeBgCounter = 1
            for(i = 0; i<buttonQuantity; i++){
                  document.getElementById("button-change-bg-"+(i+1)).style.backgroundColor = "transparent"
                  console.log("i"+i)
            }
            document.getElementById("button-change-bg-"+(changeBgCounter)).style.backgroundColor = "white"
      }
      if(changeBgCounter == 1){
            document.getElementById("button-change-bg-"+(changeBgCounter)).style.backgroundColor = "white"
      }else{
            document.getElementById("button-change-bg-"+(changeBgCounter-1)).style.backgroundColor = "transparent"
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
            if(i == (buttonNumber-1)){
                  document.getElementById(buttonIdString).style.backgroundColor = "white"
            }else{
                  document.getElementById("button-change-bg-"+(i+1)).style.backgroundColor = "transparent"
            }
      }
}

setInterval(changeBg, 5000)

