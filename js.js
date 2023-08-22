
let vida = 10;

const examplePlane = document.querySelector('#example-plane');
examplePlane.addEventListener("click", event => {
vida--;
  if (vida==0){
    alert("Ganhamo")
  }
});