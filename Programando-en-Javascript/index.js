function secondLargeNumber(arreglo) {
    let first = arreglo[0]
    let second = 0
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > first) {
            second = first
            first = arreglo[i]
        }
        if (arreglo[i] > second && arreglo[i] < first)
            second = arreglo[i]
    }
    return second;
}

let respueta = document.getElementById("respuesta")
let arreglo = [51, 98, 56, 1, 2, 3, 5, 97, 21]
let segundoMasGrande = secondLargeNumber(arreglo)
respueta.innerHTML = `El segundo número más grande es el: ${segundoMasGrande}`