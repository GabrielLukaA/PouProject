
let vida = 200;

const barraVida = document.querySelector('#vida');
const examplePlane = document.querySelector('#example-plane');
examplePlane.addEventListener("click", event => {
vida-=10;
barraVida.classList.add('w-['+vida+"px]")
  if (vida==0){
    alert("Ganhamo")
  }
});


