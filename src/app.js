import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  let num = Math.floor(Math.random() * 13) + 1
  let value = 0
  if (num == 11) {
    value = "J"
  } else if (num == 12){
    value = "Q"
  } else if (num == 13){
    value = "K"
  } else {
    value = num
  }
  
  document.querySelector(".card-title").innerHTML = value

  /////////////////////////////////////////////////////////

  let suit = ["♦", "♠", "♥", "♣"]
  let suitRandom = suit[Math.floor(Math.random() * suit.length)]

  document.querySelectorAll(".suit").forEach(elem => {
    elem.innerHTML = suitRandom;
    
    if (suitRandom === "♦" || suitRandom === "♥") {
      elem.classList.add("text-danger");
    } else {
      elem.classList.remove("text-danger"); 
    }
  });
}




