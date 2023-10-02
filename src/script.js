const operator = document.querySelectorAll('.operator');
const nums = document.querySelectorAll('.num');
let display = document.querySelector('.result');
const numbers = ['7','8','9','4','5','6','1','2','3','0','.']
const operators = [
    '<i class="fa-solid fa-percent"></i>',
    '<i class="fa-solid fa-divide division"></i>',
    '<i class="fa-solid fa-xmark"></i>',
    '<i class="fa-solid fa-minus minus"></i>',
    '<i class="fa-solid fa-plus"></i>'
];

//Função que apaga todos os dígitos inseridos
const clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener('click', () => {
    return display.innerHTML = '';
});

//Função que apaga um dígito inserido
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    let back = display.innerHTML;
    return display.innerHTML = back.substring(0, back.length - 1);
});

let firstNumber = 0;
let sinalOperation;
let secondNumber = 0;
let resultado = undefined;
let reset = false;

//Função a ser executada por cada elemento da variável nums. 
//Esta função tem como objetivo adicionar números no display, e entre outras funcionalidades.
const addDigit = (elemento,index,arr) => {
    arr[index] = numbers[index];
    arr[index].onclick = () => {
        switch(display.innerHTML){
            case '<i class="fa-solid fa-plus"></i>':
            case '<i class="fa-solid fa-minus minus"></i>':
            case '<i class="fa-solid fa-xmark"></i>':
            case '<i class="fa-solid fa-divide division"></i>':
            case '<i class="fa-solid fa-percent"></i>':
                display.innerHTML = numbers[index];
                break;
            default:
                display.innerHTML += numbers[index];
                break;
        }
        //Esta função tem o objetivo de se tivermos um resultado apresentado, a próxima operação que for ser feita, ao inserir 
        //caracteres não irá concatenar o novo número com o valor do resultado
        const resetar = () => {
            if(reset === true){
                display.innerHTML = numbers[index];
            } else {
                display.innerHTML += numbers[index];
            }
        }
        if(reset === true){
            resetar();
            reset = false;
        }
        secondNumber = parseFloat(display.innerHTML);
    }   
}
firstNumber = display.innerHTML;

//Função que adiciona um sinal de operação
const addOperator = (elemento,index,arr) => {
    arr[index] = operators[index];
    arr[index].onclick = () => {
        if(display.innerHTML != ''){
            firstNumber = parseFloat(display.innerHTML);
        }
        display.innerHTML = operators[index];
        sinalOperation = display.innerHTML;
        return sinalOperation;
    }   
}
//Método que executa uma função passada no parâmetro para cada elemento da lista da variável nums e operator.
nums.forEach(addDigit);
operator.forEach(addOperator);

//Função que apresenta o resultado da operação
const result = document.querySelector('.resultado');
result.addEventListener('click', () => {
    switch(sinalOperation){
        case '<i class="fa-solid fa-plus"></i>':
            resultado = firstNumber + secondNumber;
            display.innerHTML = resultado;
            break;
        case '<i class="fa-solid fa-minus minus"></i>':
            resultado = firstNumber - secondNumber;
            display.innerHTML = resultado;
            break;
        case '<i class="fa-solid fa-xmark"></i>':
            resultado = firstNumber * secondNumber;
            display.innerHTML = resultado;
            break;
        case '<i class="fa-solid fa-divide division"></i>':
            resultado = firstNumber / secondNumber;
            display.innerHTML = resultado;
            break;
        case '<i class="fa-solid fa-percent"></i>':
            resultado = (firstNumber / 100) * secondNumber;
            display.innerHTML = resultado;
            break;
    }
    if(resultado != undefined){
        reset = true;
    } 
})

