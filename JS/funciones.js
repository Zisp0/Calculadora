window.addEventListener("keyup", pressKeynum);

document.getElementById("pant").style.cssText = 'display: none;';
document.getElementById("pant").hidden = true;
document.getElementById("botonera").hidden = true;
var resultPrin = document.getElementById("resultado");
var resultSec1 = document.getElementById("resultSec1");
var resultSec2 = document.getElementById("resultSec2");

function iniciar(){
    document.getElementById("pant").style.cssText = 'display: flex;';
    document.getElementById("inicio").hidden = true;
    document.getElementById("pant").hidden = false;
    document.getElementById("botonera").hidden = false;
    document.getElementById('creditos').hidden = true;
}

function resaltar(id){
    document.getElementById(id).style.cssText = 'transform: scale(1.1);';
}

function desresaltar(id){
    document.getElementById(id).style.cssText = 'transform: scale(1);';
}

function downBtnGris(id){
    document.getElementById(id).style.cssText = 'background-color: #a0a0a086;';
}

function upBtnGris(id){
    document.getElementById(id).style.cssText = 'background-color: #a0a0a0;';
    resaltar(id);
}

function downBtnNaranja(id){
    document.getElementById(id).style.cssText = 'background-color: #f5992880;';
}

function upBtnNaranja(id){
    document.getElementById(id).style.cssText = 'background-color: #f59828;';
    resaltar(id);
}

function downBtnGrisOscuro(id){
    document.getElementById(id).style.cssText = 'background-color: #3131317a;';
}

function upBtnGrisOscuro(id){
    document.getElementById(id).style.cssText = 'background-color: #313131;';
    resaltar(id);
}

var expresion = "";
var aux = "";
var igualBool = false;
var signoBool = false;

function add(x){
    if(x != "div" && x != "por" && x != "mas" && x != "men" && x != "ig"){
        if(igualBool){
            resultSec2.innerHTML += "<br>" + resultPrin.innerHTML;
            resultPrin.innerHTML = "";
            expresion = "";
            igualBool = false;
        }

        if(signoBool){
            expresion += aux;
            signoBool = false;
        }

        if(resultPrin.innerHTML == "0"){
            if(x == "."){
                resultPrin.innerHTML += x;
                expresion += x;
            }else{
                resultPrin.innerHTML = x;
                expresion = x.toString();
            }

            if(x != "0"){
                resul(expresion);
            }
        }else{
            resultPrin.innerHTML += x;
            expresion += x;
            resul(expresion);
        }
    }else{
        let char = resultPrin.innerHTML.charAt(resultPrin.innerHTML.length - 1);
        if(char != "0" && char != "1" && char != "2" && char != "3" && char != "4" && char != "5" && char != "6" && char != "7" && char != "8" && char != "9"){
            resultPrin.innerHTML = resultPrin.innerHTML.substring(0, resultPrin.innerHTML.length - 1);
            expresion = expresion.substring(0, expresion.length - 1);
        }
        if(x == "ig"){
            if(!igualBool){
                resultSec2.innerHTML = resultPrin.innerHTML;
                resultPrin.innerHTML = resultSec1.innerHTML;
                igualBool = true;
                expresion = resultPrin.innerHTML.substring(2, resultPrin.innerHTML.length);
                resulOff();
            }
        }else{
            if(x == "div"){
                resultPrin.innerHTML += "&#xF7;";
                expresion += "/";
            }
            if(x == "por"){
                resultPrin.innerHTML += "&#215;";
                expresion += "*";
            }
            if(x == "mas"){
                resultPrin.innerHTML += "+";
                expresion += "+";
            }
            if(x == "men"){
                resultPrin.innerHTML += "-";
                expresion += "-";
            }
            
            if(igualBool){
                resul(expresion.substring(0, expresion.length - 1));
                resultSec2.innerHTML += "<br>" + resultSec1.innerHTML;
                resultPrin.innerHTML = resultPrin.innerHTML.substring(2, resultPrin.innerHTML.length);
                igualBool = false;
            }else{
                resul(expresion);
            }
        }
    }
}

function del(){
    if(igualBool){
        igualBool = false;
        resultSec2.innerHTML += "<br>" + resultPrin.innerHTML;
        resultPrin.innerHTML = "0";
        expresion = "0";
        resulOff();
    }else{
        if(resultPrin.innerHTML.length == 1){
            if(resultPrin.innerHTML == "0"){
                resultSec2.innerHTML = "";
            }else{
                resultPrin.innerHTML = "0";
                expresion = "0";
                resulOff();
            }
        }else{
            resultPrin.innerHTML = resultPrin.innerHTML.substring(0, resultPrin.innerHTML.length - 1);
            if(signoBool){
                signoBool = false;
                expresion += aux;
            }
            expresion = expresion.substring(0, expresion.length - 1);
            let char = expresion.charAt(expresion.length - 1);  
            if(char == "/" || char == "*" || char == "-" || char == "+"){
                aux = char;
                signoBool = true;
                expresion = expresion.substring(0, expresion.length - 1);
            }
            console.log("expresion: " + expresion);
            resul(expresion);
        }
    }
}

function resul(exp){
    resultSec1.innerHTML = "= " + eval(exp);
}

function resulOff(){
    resultSec1.innerHTML = "";
}

function pressKeynum(e){
    let tecla = e.keyCode;
    console.log(tecla);
    switch (tecla) {
        case 8:{
            let elemento = document.getElementById("AC");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 111:{
            let elemento = document.getElementById("division");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 103:{
            let elemento = document.getElementById("num7");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 104:{
            let elemento = document.getElementById("num8");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 105:{
            let elemento = document.getElementById("num9");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 106:{
            let elemento = document.getElementById("por");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 100:{
            let elemento = document.getElementById("num4");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 101:{
            let elemento = document.getElementById("num5");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 102:{
            let elemento = document.getElementById("num6");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 109:{
            let elemento = document.getElementById("men");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 97:{
            let elemento = document.getElementById("num1");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 98:{
            let elemento = document.getElementById("num2");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 99:{
            let elemento = document.getElementById("num3");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 107:{
            let elemento = document.getElementById("mas");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 96:{
            let elemento = document.getElementById("btn0");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 110:{
            let elemento = document.getElementById("punto");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        case 13:{
            let elemento = document.getElementById("igual");
            elemento.click();
            elemento.onmousedown();
            window.setTimeout(elemento.onmouseup,100);
            window.setTimeout(elemento.onmouseout,200);
            break;
        }
        default:{

            break;
        }
        
    }
}
