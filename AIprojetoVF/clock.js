// JavaScript source code
const Clock = document.getElementById("clock");

function Relogio() {
    let date = new Date();
    dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado")
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
    Clock.innerHTML =
        dayName[date.getDay()] + " " +
        date.getDate() + " " +
        monName[date.getMonth()] + " " +
        date.getFullYear() + " " +
        date.toLocaleTimeString()  ;
        setTimeout(Relogio, 1000);
}
Relogio();