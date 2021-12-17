let recoveryPauseButton = false;
let countSec = 1;
let countMin = 0;
let countHour = 0;
let interval = undefined;

// Função que iniciar a cronometragem
function start(){ 

    // Verifica se o botão pause precisa ser recuperado
    if(recoveryPauseButton){
        var pause = document.getElementById("pause");
        pause.innerText = "pausar";
    }

    switch(interval){
        case undefined:
            interval = setInterval(chronometer,1000); 
        default:
    }    
     
}

// Função que controla horas, minutos e segundos do cronômetro
function chronometer(){
    if(countSec>=60){
        countSec = 0;
        if(countMin >= 59){
            // Reinicia os minutos
            countMin = 0;
            // Pega todos elementos com a classe hour
            var hour = document.getElementsByClassName("hour");
            // Pega o único elemento com essa classe
            hour = hour[0];
            // Incrementa uma hora
            countHour++;
            // Escreve a hora 
            hour.innerText = (countHour < 10) ? correctLessThan10(countHour,":") : countHour + ":";
        }
       
        // Pega todos elementos com a classe min
        var min = document.getElementsByClassName("min");
        // Pega o único elemento com essa classe
        min = min[0];
        // Incrementa um minuto
        countMin++;
        // Escreve os minutos
        min.innerText = (countMin < 10) ? correctLessThan10(countMin,":") : countMin + ":";
    }
        
             
    
    // Pega todos elementos com a classe sec
    var sec = document.getElementsByClassName("sec");
    // Pega o único elemento com essa classe
    sec = sec[0];
    // Escreve os segundos
    sec.innerText = (countSec < 10) ? correctLessThan10(countSec) : countSec;
    // Incrementa um segundo
    countSec++;
    
}

// Função que corrige a ausência de 0s em números menores que 10
function correctLessThan10(value,caracter){
    return caracter == undefined ? "0" + value: "0" + value + ":";
}

// Função que reseta o cronômetro
function reset(){
    clearInterval(interval);
    var hour = document.getElementsByClassName("hour");
    hour = hour[0];
    hour.innerText = "00:";
    countHour = 0;
    var min = document.getElementsByClassName("min");
    min = min[0];
    min.innerText = "00:";
    countMin = 0;
    var sec = document.getElementsByClassName("sec");
    sec = sec[0];
    sec.innerText = "00";
    countSec = 1;
    interval = undefined;

}

// Função que pausa o cronômetro
function pause(){
    if(interval){
        clearInterval(interval);
        var pause = document.getElementById("pause");
        pause.innerText = "continuar";
        interval = undefined;
        // Indicação de que o botão pause pode precisar ser recuperado
        recoveryPauseButton = true;
    }
    else{
        var pause = document.getElementById("pause");
        pause.innerText = "pausar";
        start();
    }
    
}

