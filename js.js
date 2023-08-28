
let vida = 200;
let dano = 10;
let nivelNumber = 1;

var interval
let sec = 30;
const tempo = document.querySelector('#tempo');
const barraVida = document.querySelector('#vida');
let examplePlane = document.querySelector('#example-plane');
const nivel = document.querySelector("#nivel");
const exampleTarget = document.querySelector("#target")

exampleTarget.addEventListener("targetFound", event => {
    interval = setInterval(aumenta, 1000);
    barraVida.style.width = "" + vida + 'px'
})



function aumenta() {
    sec--;
    tempo.innerText = "" + sec;
    if (sec == 0) {
        switch (nivelNumber) {
            case 1:
                alert("Mas já?")
                break;
            case 2:
                alert("Não aguentou a pontada?")
                break;
            case 3:
                alert("")
                break;
            case 4:
                alert("")
                break;
            case 5:
                alert("")
                break;
            case 6:
                alert("")
                break;
            case 7:
                alert("Você foi caneta azulado.")
                break;
            case 8:
                alert("")
                break;
            case 9:
                alert("Fraco.")
                break;
            case 10:
                alert("30 segundos é o suficiente ela disse.")
                break;
        }

    }
}




examplePlane.addEventListener("click", event => {
    examplePlane = document.querySelector('#example-plane');
    vida -= dano;
    barraVida.style.width = "" + vida + "px";
    if (vida <= 0) {

        dano = dano / 100 * 75
        nivel.innerText = nivelNumber + 1
        nivelNumber++;
        vida = 200;
        nivel.innerHTML(nivelNumber + 1);
        alert("Parabéns! Passou de nível.");
        sec = 30;
        tempo.innerText = sec;
    }
});


