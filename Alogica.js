function calculoimc(){
    let peso = parseFloat(document.getElementById("peso").value.trim())
    let altura = parseFloat(document.getElementById("altura").value.trim())
    let imc = 0;
    let resultado="";
 
    imc = peso / (altura * altura); 
 
    if (imc <18.5){
        resultado = "abaixo do peso."
    }
    else if (imc <=25){
        resultado = "peso normal."
    }
    else if (imc <=30){
        resultado = "sobrepeso"
    }
    else if (imc <=35){
        resultado = "obesidade"
    }
    else if (imc >=35 && imc <40){
        resultado ="obesidade 2"
    }
    else if (imc >=40){
        resultado ="obesidade 3"
    }
    console.log(resultado)
    console.log(imc)
 
    alert("O imc é" + imc + " e está " + resultado);
}