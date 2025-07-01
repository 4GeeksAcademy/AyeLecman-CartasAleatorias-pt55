import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  document.querySelector(".card-title").innerHTML = Math.floor(Math.random() * 13) + 1
  document.querySelectorAll(".suit").forEach(elem => {
    elem.innerHTML = suitRandom;
  });
}

let suit = ["♦", "♠", "♥", "♣"]

let suitRandom = suit[Math.floor(Math.random() * suit.length)]
