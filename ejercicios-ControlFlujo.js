// Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
// 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
// Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
// Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
// Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
// Si la compra supera los $50 el gasto de envío será gratuito

const compra = -10;
let total = 0;
if (compra <= 10) {
  total = compra + 3;
  console.log("la compra es de: ", total);
} else if (compra <= 20 && compra > 10) {
  total = compra + 5;
  console.log("la compra es de: ", total);
} else if (compra <= 50 && compra > 20) {
  total = compra + 7;
  console.log("la compra es de:", total);
} else if (compra > 50) {
  total = compra;
  console.log(total);
}

const dia = "k";
if (dia == "Lunes") {
  console.log("It's Monday");
} else if (dia == "Martes") {
  console.log("It's Tuesday");
} else if (dia == "Miercoles") {
  console.log("It's Wednesday");
} else if (dia == "Jueves") {
  console.log("It's Thursday");
} else if (dia == "Viernes") {
  console.log("It's Friday");
} else if (dia == "Sabado") {
  console.log("It's Saturday");
} else if (dia == "Domingo") {
  console.log("It's Sunday");
} else
  console.log("ese no es un día de la semana");
