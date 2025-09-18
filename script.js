let ce = document.getElementById("ce");
let ya = document.getElementById("ya");
let pi = document.getElementById("pi");
let me = document.getElementById("me");
let pu = document.getElementById("pu"); // Entrada en pulgadas

// 🔹 Función que hace las conversiones
function convertir(pulgadas) {
  let centimetros = pulgadas * 2.54;
  let pies = pulgadas / 12;
  let yardas = pulgadas / 36;
  let metros = centimetros / 100;
  return { pies, yardas, centimetros, metros };
}

// 🔹 Función que actualiza la interfaz
function calcular() {
  let pulgadas = parseFloat(pu.value);
  let { pies, yardas, centimetros, metros } = convertir(pulgadas);

  pi.textContent = pies.toFixed(2);
  ya.textContent = yardas.toFixed(2);
  ce.textContent = centimetros.toFixed(2);
  me.textContent = metros.toFixed(2);
}
