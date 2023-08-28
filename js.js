
let vida = 200;
let dano = 10;
let nivelNumber = 1;


const barraVida = document.querySelector('#vida');
let examplePlane = document.querySelector('#example-plane');
const nivel = document.querySelector("#nivel")
console.log(nivel.innerText)
nivel.innerText = nivelNumber+1
nivelNumber ++;

console.log(nivel.innerText)

examplePlane.addEventListener("click", event => {
    examplePlane = document.querySelector('#example-plane');
    vida -= dano;
    barraVida.style.width = "" + vida + "px";
    if (vida == 0) {
        dano = dano/100*75
        nivel.innerText = nivelNumber+1
        nivelNumber ++;
        nivel.innerHTML(nivelNumber+1)
        alert("Parabéns! Passou de nível.")
    }
});


