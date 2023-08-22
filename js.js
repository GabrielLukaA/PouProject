
let vida = 200;

const barraVida = document.querySelector('#vida');
let examplePlane = document.querySelector('#example-plane');

examplePlane.addEventListener("click", event => {
    examplePlane = document.querySelector('#example-plane');
    vida -= 10;
    barraVida.style.width = "" + vida + "px";
    if (vida == 0) {
        alert("Ganhamo")
    }
});


