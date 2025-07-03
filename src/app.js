import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

///////////////////función cambiar carta/////////////////////////////////////////

window.switchCard = function () {

  let num = Math.floor(Math.random() * 13) + 1
  let value = 0
  if (num == 11) {
    value = "J"
  } else if (num == 12) {
    value = "Q"
  } else if (num == 13) {
    value = "K"
  } else {
    value = num
  }

  document.querySelector(".card-title").innerHTML = value

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

////////////////////cambiar carta cuando reinicie web////////////////////////////////////////

window.onload = switchCard()

///////////////////////función para cambiar dimensión y funcionalidad del botón/////////////////////////////////////
let btnDimension = document.querySelector("#dimension");

window.cambiarTamaño = function () {
  let heightInput = document.querySelector("#height");
  let widthInput = document.querySelector("#width");
  let card = document.querySelector(".custom-card");

  let newHeight = heightInput.value.trim();
  let newWidth = widthInput.value.trim();

  if (newHeight) card.style.height = newHeight + "px";
  if (newWidth) card.style.width = newWidth + "px";
}

btnDimension.addEventListener("click", cambiarTamaño);

///////////////////////función para agregar temporizador/////////////////////////////////////

let intervalId = null;
let countdown = 10;
let contadorElemento = document.querySelector("#contador");
let checkbox = document.querySelector("#autoCardToggle");

function iniciarCuentaRegresiva() {
  
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    countdown--;
    contadorElemento.textContent = countdown;

    if (countdown === 0) {
      switchCard(); 
      countdown = 10; 
      contadorElemento.textContent = countdown;
    }
  }, 1000); 
}

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    iniciarCuentaRegresiva();
  } else {
    clearInterval(intervalId);
    contadorElemento.textContent = "10"; // opcional: resetear visual
  }
});