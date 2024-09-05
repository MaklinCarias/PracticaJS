document.getElementById("Titulo").innerHTML = "Calculadora";

function calcular() {
    var numero1 = document.getElementById("textNumero1");
    var numero2 = document.getElementById("textNumero2");

    var total = parseFloat(numero1.value) + parseFloat(numero2.value);

    document.getElementById("textResultado").value = total;
}
