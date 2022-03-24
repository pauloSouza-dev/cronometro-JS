
var horas = 0;
var minutos = 0;
var segundos = 0;
var cronometro;
var is_active = false;

const html_horas = document.getElementById("horas");
const html_minutos = document.getElementById("minutos");
const html_segundos = document.getElementById("segundos");

html_horas.innerHTML = "0" + 0;
html_minutos.innerHTML = "0" + 0;
html_segundos.innerHTML = "0" + 0;

function start(){

    if(is_active == true){
        return;
    }

    cronometro = setInterval(() => timer(),1000);
    is_active = true;
    
}

function pause(){
    clearInterval(cronometro);
    is_active = false;
}

function stop(){
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    is_active = false;

    html_horas.innerHTML = (horas < 10 ? "0"+horas : horas);
    html_minutos.innerHTML = (minutos < 10 ? "0" + minutos : minutos);
    html_segundos.innerHTML = (segundos < 10 ? "0" + segundos : segundos);

}

function timer(){
    segundos++;

    if(segundos == 59){
        minutos++;
        segundos = 0;
    }

    
    html_horas.innerHTML = (horas < 10 ? "0"+horas : horas);
    html_minutos.innerHTML = (minutos < 10 ? "0" + minutos : minutos);
    html_segundos.innerHTML = (segundos < 10 ? "0" + segundos : segundos);

}