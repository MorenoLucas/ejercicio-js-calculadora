function calcular(parametro) {
  var num1 = parseFloat(document.getElementById("numero1").value);
  var num2 = parseFloat(document.getElementById("numero2").value);
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
  }
}

let num1 = 0;
let num2 = 0;
let operacion;

function obtenerNumero(num) {
  if (num1 == 0 && num1 !== "0.") {
    num1 = num;
  } else {
    num1 += num;
  }
  actualizar();
}
function coma() {
  if (num1 == 0) {
    num1 = "0.";
  } else if (num1.indexOf(".") == -1) {
    num1 += ".";
  }
  actualizar();
}
function operar(valor) {
  if (num1 == 0) {
    num1 = parseFloat(document.getElementById("resul").value);
  }
  num2 = parseFloat(num1);
  num1 = 0;
  operacion = valor;
}

function esIgual() {
  num1 = parseFloat(num1);
  switch (operacion) {
    case 1:
      num1 += num2;
      break;
    case 2:
      num1 = num2 - num1;
      break;
    case 3:
      num1 *= num2;
      break;
    case 4:
      num1 === 0 ? alert('no se puede dividir por cero'): num1 = num2 / num1;
      
      break;
  }
  actualizar();
  num2 = parseFloat(num1);
  num1 = 0;
}
function actualizar() {
  document.getElementById("resul").value = num1;
}
function borrar(){
  num1 = 0;
  num2 = 0;
  actualizar();
}
