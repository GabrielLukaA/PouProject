
let vida = 200;

const barraVida = document.querySelector('#vida');
let examplePlane = document.querySelector('#example-plane');
console.log(barraVida.style.width);
examplePlane.addEventListener("click", event => {
    examplePlane = document.querySelector('#example-plane');
vida-=10;
console.log(+barraVida.style.width - 10);

  if (vida==0){
    alert("Ganhamo")
  }
});


