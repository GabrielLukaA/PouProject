
let vida = 200;
let dano = 10;
let nivelNumber = 1;

let interval = null;
let sec = 30;
const tempo = document.querySelector('#tempo');
const barraVida = document.querySelector('#vida');
let examplePlane = document.querySelector('#example-plane');
const nivel = document.querySelector("#nivel");
const exampleTarget = document.querySelector("#target")
let audio = new Audio("canetaazul.mp3")
let audioOlha = new Audio("olha.mp3")

exampleTarget.addEventListener("targetFound", event => {
    audioOlha.muted = true;
    audio.pause();
    audio = new Audio("canetaazul.mp3")
    alert("opa")
    if (interval == null) {
        interval = setInterval(aumenta, 1000);
    }
    barraVida.style.width = "" + vida + 'px'
})



function aumenta() {
    sec--;
    tempo.innerText = "" + sec;
    if (sec == 0) {
        clearInterval(interval);
        audioOlha.play();
        switch (nivelNumber) {
            case 1:
                alert("Mas já?")
                break;
            case 2:
                alert("Não aguentou a pontada?")
                break;
            case 3:
                alert("CANETA AZULLLLL")
                break;
            case 4:
                alert("ninguém liga pra você, tente de novo.")
                break;
            case 5:
                alert("Famoso aluno nota 7")
                break;
            case 6:
                alert("Pode clicar mas da minha caneta não vai escapar")
                break;
            case 7:
                alert("Você foi caneta azulado.")
                break;
            case 8:
                alert("Nadou nadou e na tinta se afogou")
                break;
            case 9:
                alert("Fraco.")
                break;
            case 10:
                alert("30 segundos é o suficiente me disseram...")
                break;
        }
        nivelNumber = 1;
        nivel.innerText = nivelNumber
        dano = 10;
        barraVida.style.width = 0 + "px";
        vida = 200;
        interval = null;
        sec = 30;
        tempo.innerText = sec;
    }
}




examplePlane.addEventListener("click", event => {
    examplePlane = document.querySelector('#example-plane');
    vida -= dano;
    barraVida.style.width = "" + vida + "px";
    if (vida <= 0) {
        if (nivelNumber == 10) {
           audio = new Audio("canetaazul.mp3")
            alert("Parabéns, você ganhou a caneta do Blue Pen.")
            audio.play()
            nivelNumber = 1;
            nivel.innerText = nivelNumber
            dano = 10;
            barraVida.style.width = 0 + "px";
            vida = 200;
        } else {

            dano = dano / 100 * 75
            nivel.innerText = nivelNumber + 1
            nivelNumber++;
            sec = 31;
            vida = 200;
            nivel.innerHTML(nivelNumber + 1);
            clearInterval(interval)

            tempo.innerText = sec;
            interval = setInterval(aumenta, 1000);

        }

    }
});


