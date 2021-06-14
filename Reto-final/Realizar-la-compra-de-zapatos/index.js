function comprobarTalla(event) {
    let talla = tallasDeZapatos.value
    if (talla === "Par 1")
        resultado.innerHTML = "<p>Este par es muy pequeño</p> <p>Sigue buscando.</p>"
    else
        if (talla === "Par 2")
            resultado
    switch (talla) {
        case "Par 1":
            resultado.innerHTML = "<p>Este par es muy pequeño</p> <p>Sigue buscando.</p>"
            break;
        case "Par 2":
            resultado.innerHTML = "<p>Este par es el ideal.</p> <p>Compralo.</p>"
            break;
        case "Par 3":
            resultado.innerHTML = "<p>Este par es muy grande</p> <p>Sigue buscando.</p>"
            break;
        default:
            resultado.innerHTML = "<p>Verifica el zapato.</p>"
            break;
    }
}

let tallasDeZapatos = document.getElementById("inputTallaDeZapatos")
let button = document.getElementById("button")
let resultado = document.getElementById("resultado")
button.addEventListener("click", comprobarTalla)