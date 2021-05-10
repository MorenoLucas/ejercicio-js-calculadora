function calculadora(operacion, num1, num2) {
    switch (operacion) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        num2 === 0 ? alert("No se puede divir por cero") : num1 / num2;
      case "*":
        return num1 * num2;
      default:
        return "no es una opreación valida";
    }
  }
  console.log(calculadora("+", 10, 10));

  function restar(num1, num2) {
    return num1 - num2;
  }
  function sumar(num1, num2) {
    return num1 + num2;
  }
  function dividir(num1, num2) {
    num2 === 0 ? alert("No se puede divir por cero") : num1 / num2;
  }
  function multiplicar(num1, num2) {
    return num1 * num2;
  }