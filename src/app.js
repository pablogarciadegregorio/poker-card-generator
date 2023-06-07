/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suit = ["♠", "♣", "♥", "♦"];

  function Random(maximo) {
    return Math.floor(Math.random() * maximo);
  }
  let topRandom = suit[Random(suit.length)];
  let midRandom = number[Random(number.length)];
  let top = document.getElementById("top");

  top.innerHTML = bot.innerHTML = topRandom;

  let mid = document.getElementById("mid");
  mid.innerHTML = midRandom;

  if (topRandom === "♦" || topRandom === "♥") {
    top = document.getElementById("top");
    top.style.color = "red";
    bot.style.color = "red";
  }

  // OPCIONAL

  function generateNewCard() {
    let newCard = document.querySelector("new-card");
    newCard.style.color = "blue";
  }
};
