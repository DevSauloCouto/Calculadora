let botao = document.querySelector(".botao");
//função que retorna o resultado da soma dos números inseridos no input elemento HTML
botao.onclick = function send(){
    let num1 = document.querySelector(".soma");
    let valor1 = num1.value;
    let num2 = document.querySelector(".sum");
    let valor2 = num2.value;
    let result = parseInt(valor1) + parseInt(valor2);
    if(!valor1 == !null || !valor2 == !null){
        window.alert('insira um número');
    } else {
        document.querySelector(".result").innerHTML = "RESULTADO: " + valor1 + " + " + valor2 + " = " + result;
    } 
}
//função que reseta a página se o usuário clicar no botão.
let redefinir = document.querySelector(".resetar");
redefinir.onclick = function reset(){
    window.location.reload(true);
}
