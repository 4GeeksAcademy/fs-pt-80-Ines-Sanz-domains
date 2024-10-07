/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".net", ".es", ".com", ".org"];

for (let i of pronoun) {
  for (let j of adj) {
    for (let k of noun) {
      for (let l of domain) {
        console.log(`${i}${j}${k}${l}`);
      }
    }
  }
}
