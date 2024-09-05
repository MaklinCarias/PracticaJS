function promedio() {
    var nota1 = document.getElementById("textNota1");
    var nota2 = document.getElementById("textNota2");
    var nota3 = document.getElementById("textNota3");

    var promedio = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;

    document.getElementById("textPromedio").value = promedio;
}
