// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// arreglo  para almacenar los nombres de los amigos
let amigos = [];

// funcion para agregar un amigo
function agregarAmigo() {
    // Obtiene el valor del input y elimina espacios en blanco al inicio y final
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // valida que el nombre no este vacio
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return;
    }

    // valida que el nombre no se repita en el arreglo
    if (amigos.includes(nombre)) {
        alert("El nombre ya ha sido agregado");
        return;
    }

    // agrega el nombre al array y limpia el input
    amigos.push(nombre);
    input.value = "";

    // actualiza la lista de amigos mostrada
    mostrarListaAmigo();
}

// funcion para mostrar la lista de amigos en pantalla
function mostrarListaAmigo() {
    // obtiene el elemento ul donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista actual

    // recorre el array y crea un elemento li para cada nombre
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// fucion para sortear y mostrar un amigo secreto aleatorio
function sortearAmigo() {
    // verifica que haya al menos un nombre en el arreglo
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // seleccion de un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    // mostrar el resultado en el elemento ul con id resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpia resultados anteriores
    let li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + amigoSeleccionado;
    resultado.appendChild(li);
}
