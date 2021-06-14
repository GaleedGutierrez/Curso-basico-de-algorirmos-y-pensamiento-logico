function verificarEdad() {
    edadUsuario = parseInt(edad.value)
    edadUsuario >= 18 ? resultado.innerHTML = "<p>Usted es mayor de edad</p>" : resultado.innerHTML = "<p> Usted es menor de edad</p>"
}

let edad = document.getElementById("edad")
let button = document.getElementById("button")
let resultado = document.getElementById("resultado")
button.addEventListener("click", verificarEdad)