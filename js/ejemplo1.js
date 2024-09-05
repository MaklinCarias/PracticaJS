var frutas = ["Manzana", "Uva", "Fresa", "Pera", "Sandia", "Melon"];


for (var i = 0; i < frutas.length; i++) {
    
    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";
}

// Objectos
var persona = { nombre: "Juan", telefono: "1234-5678" };

// Aray de objectos
var contactos = [
    { nombre: "Luis", telefono: "8765-4321" },
    { nombre: "Carmen", telefono: "1234-1234" },

];
contactos.push(persona); // Agregando un elemento = 2

console.log(contactos);
for (var i = 0; i < contactos.length; i++) {

    let li = "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    document.getElementById("listaPersonas").innerHTML += li;
}
