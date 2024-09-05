var productos = [
    { nombre: "Coca-cola lata", precio: 2.25 },
    { nombre: "Crema", precio: 1.00 },
    { nombre: "Arroz libra", precio: 0.55 },
    { nombre: "Azucar", precio: 0.65 },
    { nombre: "Sal", precio: 0.15 },
    { nombre: "Jugo del Valle", precio: 1.25 },
    { nombre: "Coffee mate", precio: 6.50 },
    { nombre: "Aceite", precio: 2.70 },
    { nombre: "Maruchan", precio: 0.75 },
    { nombre: "Sardinas", precio: 1.00 },

];

for (var i = 0; i < productos.length; i++) {

    var html = "<tr>";
    html += "        <td>" + productos[i].nombre + "</td>";
    html += "        <td>" + productos[i].precio + "</td>";
    html +=     "</tr>";

    document.getElementById("tbodyProducto").innerHTML += html;
} 