function entrarAlaTienda() {
    if (estadoDeLaPuerta) {
        resultado.innerHTML = "Ingresas a la tienda."
    }
    else
        resultado.innerHTML = "Abres la puerta e ingresas a la tienda."
}

let boton = document.getElementById("botonEntrar")
let resultado = document.getElementById("resultado")
let estadoDeLaPuerta = true;
boton.addEventListener("click", entrarAlaTienda)

