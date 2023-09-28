let paragrafo = document.getElementById("entrada");
const numeros = ["0","1","2","3","4","5","6","7","8","9","."];
const operadores = [" + "," - "," * "," / "," % "];

//função que insere e trata os números selecionados pelo usuário..
function insertNumber(num){
    paragrafo.innerHTML += numeros[num]; 
    value = paragrafo.innerHTML;
}

//função que insere um sinal de operação selecionado pelo usuário..
function insertOperador(n){
    paragrafo.innerHTML += operadores[n];
    value = paragrafo.innerHTML;
}

//função que apresenta o resultado da operação..
function resultado(){
    return paragrafo.innerHTML = eval(value);
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

//função que adiciona um caracter de operador no campo de paragrafo com atalho do teclado;
const keyOperator = (event) => {
    if(event.key == '+'){
        paragrafo.innerHTML = operadores[0];
    } 
    if(event.key == '-'){
        paragrafo.innerHTML = operadores[1];
    }
    if(event.key == '*'){
        paragrafo.innerHTML = operadores[2];
    }
    if(event.key == '/'){
        paragrafo.innerHTML = operadores[3];
    }
    if(event.key == '%'){
        paragrafo.innerHTML = operadores[4];
    }
}


