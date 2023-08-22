
let vida = 200;

const barraVida = document.querySelector('#vida');
let examplePlane = document.querySelector('#example-plane');
console.log(barraVida.style);
examplePlane.addEventListener("click", event => {
    examplePlane = document.querySelector('#example-plane');
vida-=10;
console.log(barraVida);

  if (vida==0){
    alert("Ganhamo")
  }
});


