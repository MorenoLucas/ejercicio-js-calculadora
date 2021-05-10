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

let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;
let pass2 = document.getElementById("password2").value;
let mail = document.getElementById("mail").value;
let contraseña = document.getElementById("pass").value;

document.getElementById("emailHelp").style.display = "none";
document.getElementById("passHelp").style.display = "none";
document.getElementById("mailHelp").style.display = "none";
document.getElementById("contraHelp").style.display = "none";

function crear() {
  email = document.getElementById("email").value;
  pass = document.getElementById("password").value;
  pass2 = document.getElementById("password2").value;

  if (pass === pass2) {
    email = document.getElementById("email").value;
    console.log("usuario creado");
  } else {
    alert("no coinciden las contraseñas");
  }
}

function iniciar() {
  if (mail === email && pass === contraseña) {
    console.log("Logeado");
  } else {
    alert("El mail o la contraseña no coinciden con un usuario creado");
  }
}

function validar(m) {
  if (m.value.length < 3) {
    document.getElementById("emailHelp").style.display = "block";
   
  } else {
    document.getElementById("emailHelp").style.display = "none";
  }
}
function validar1(p) {
  if (p.value.length < 3) {
    document.getElementById("passHelp").style.display = "block";
  } else {
    document.getElementById("passHelp").style.display = "none";
  }
}
function validar2(m) {
  if (m.value.length < 3) {
    document.getElementById("mailHelp").style.display = "block";
  } else {
    document.getElementById("mailHelp").style.display = "none";
  }
}
function validar3(c) {
  if (c.value.length < 3) {
    document.getElementById("contraHelp").style.display = "block";
  } else {
    document.getElementById("contraHelp").style.display = "none";
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
