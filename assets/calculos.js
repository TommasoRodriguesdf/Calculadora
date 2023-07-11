function soma(number1, number2) {
    return number1 + number2;
  }

  function multiplicacao(number1, number2) {
    return number1 * number2;
  }

  function divisao(number1, number2) {
    if (number2 !== 0) {
      return number1 / number2;
    }
  }

  function subtracao(number1, number2) {
    return number1 - number2;
  }

  let numero1 = parseFloat(prompt("Digite um número"));
  let numero2 = parseFloat(prompt("Digite outro número"));
  
  let resultadoSoma = soma(numero1, numero2);
  console.log("A dos números é: " + resultadoSoma);
  
  let resultadoMultiplicacao = multiplicacao(numero1, numero2);
  console.log("A multiplicação dos números é: " + resultadoMultiplicacao);
  
  let resultadoDivisao = divisao(numero1, numero2);
  console.log("A divisão dos números é: " + resultadoDivisao);
  
  let resultadoSubtracao = subtracao(numero1, numero2);
  console.log("A subtração dos números é: " + resultadoSubtracao);