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



  function calcular(parametro) {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    resultado.disabled = false;
    switch (parametro) {
      case 1:
        document.forms["calculadora"]["resultado"].value = num1 + num2;
        break;
      case 2:
        document.forms["calculadora"]["resultado"].value = num1 - num2;
        break;
      case 3:
        document.forms["calculadora"]["resultado"].value = num1 * num2;
        break;
      case 4:
        num2 === 0 ? alert("No se puede divir por cero") : num1 / num2;

        break;
    }}