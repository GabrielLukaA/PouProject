
let vida = 200;

const barraVida = document.querySelector('#vida');
const examplePlane = document.querySelector('#example-plane');
console.log(barraVida);
examplePlane.addEventListener("click", event => {
vida-=10;
console.log(barraVida);

  if (vida==0){
    alert("Ganhamo")
  }
});


