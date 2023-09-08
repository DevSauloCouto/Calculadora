let paragrafo = document.getElementById("entrada");
let buttons = {
    ponto: document.getElementsByClassName("ponto").innerHTML = '.',
    zero: document.getElementsByClassName("zero").innerHTML = '0',
    um: document.getElementsByClassName("um").innerHTML = '1',
    dois: document.getElementsByClassName("dois").innerHTML = '2',
    tres: document.getElementsByClassName("tres").innerHTML = '3',
    quatro: document.getElementsByClassName("quatro").innerHTML = '4',
    cinco: document.getElementsByClassName("cinco").innerHTML = '5',
    seis: document.getElementsByClassName("seis").innerHTML = '6', 
    sete: document.getElementsByClassName("sete").innerHTML = '7',
    oito: document.getElementsByClassName("oito").innerHTML = '8',
    nove: document.getElementsByClassName("nove").innerHTML = '9'
};
let operators = {
    soma: document.getElementsByClassName("soma").innerHTML = ' + ',
    subtracao: document.getElementsByClassName("subtracao").innerHTML = ' - ',
    multiplicacao: document.getElementsByClassName("mult").innerHTML = ' * ',
    divisao: document.getElementsByClassName("divisao").innerHTML = ' / ',
    porcentagem: document.getElementsByClassName("percent").innerHTML = ' % '
}

//função que insere e trata os números selecionados pelo usuário..
function number(prop){
    paragrafo.innerHTML += buttons[prop];
    value1 = paragrafo.innerHTML;
    console.log(value1);

    numeros = {
        num1: parseInt(value1),
        num2: ''
    };

    if(value1.length == 5){
        numeros.num2 = parseInt(value1.substring(4));
    } else if (value1.length == 6){
        numeros.num2 = parseInt(value1.substring(4)) || parseInt(value1.substring(5));
    } else if (value1.length == 7){
        numeros.num2 = parseInt(value1.substring(4)) || parseInt(value1.substring(5));
    } else if (value1.length == 8){
        numeros.num2 = parseInt(value1.substring(4)) || parseInt(value1.substring(5)) || parseInt(value1.substring(6));
    } else if (value1.length == 9){
        numeros.num2 = parseInt(value1.substring(4)) || parseInt(value1.substring(5)) || parseInt(value1.substring(6)) || parseInt(value1.substring(7));
    } else if (value1.length == 10){
        numeros.num2 = parseInt(value1.substring(4)) || parseInt(value1.substring(5)) || parseInt(value1.substring(6)) || parseInt(value1.substring(7)) || parseInt(value1.substring(8));
    } else if(value1.length == 11){
        numeros.num2 = parseInt(value1.substring(4)) || parseInt(value1.substring(5)) || parseInt(value1.substring(6)) || parseInt(value1.substring(7)) || parseInt(value1.substring(8)) || parseInt(value1.substring(9));
    }
    console.log(numeros);
}

//função que apaga os números inseridos pelo usuário..
function clean(){
    paragrafo.innerHTML = "";
}

//função que deleta um número ou sinal inserido pelo usuário..
function back(){
    let backspace = paragrafo.innerHTML;
    paragrafo.innerHTML = backspace.substring(0, backspace.length - 1);
}

//função que insere um sinal de operação selecionado pelo usuário..
function operation(prop){
    paragrafo.innerHTML += operators[prop];
    operador = {
        sinal: operators[prop]
    };
    console.log(operador);
    return true;
}

//função que apresenta o resultado da operação..
function resultado(){
    if(operador.sinal == " + "){
        paragrafo.innerHTML = numeros.num1 + numeros.num2;
    } else if(operador.sinal == " - "){
        paragrafo.innerHTML = numeros.num1 - numeros.num2;
    } else if(operador.sinal == " * "){
        paragrafo.innerHTML = numeros.num1 * numeros.num2;
    } else if(operador.sinal == " / "){
        paragrafo.innerHTML = numeros.num1 / numeros.num2;
    } else if(operador.sinal == " % "){
        paragrafo.innerHTML = (numeros.num1 / 100) * numeros.num2;
    }
}





