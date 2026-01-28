import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const newExcuse = randGenerator()

  // Toma el array y selecciona, de manera random, y devuelve uno solo
  
   function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
  }
  
  // Toma el array random generado en randomArray() y lo devuelve en una sola línea de código
  function randGenerator() {
    const randWho = getRandomElement(who)
    const randAction = getRandomElement(action)
    const randWhat = getRandomElement(what)
    const randWhen = getRandomElement(when)
    return randWho + " " + randAction + " " + randWhat + " " + randWhen;
  }

// Vincula con html a través de un "textContent"
  document.getElementById("excuse").textContent = newExcuse;

};

