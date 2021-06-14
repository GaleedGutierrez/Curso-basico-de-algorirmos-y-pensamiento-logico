class AccionesConLaVela
{
    constructor()
    {
        this.botonPrecionado = botonPrecionado
        this.vela = vela
        this.encenderLaVela = this.encenderLaVela.bind(this)
        this.extinguirVela = this.extinguirVela.bind(this)
        this.mensajeSobreElEstadoDelaVela = this.mensajeSobreElEstadoDelaVela.bind(this)
        this.verificarEstadoDelaVela()
    }

    verificarEstadoDelaVela()
    {
        let {
            encenderLaVela, 
            mensajeSobreElEstadoDelaVela,
            extinguirVela
        } = this
        if (!laVelaEsta && prenderLaVela) 
            encenderLaVela()
        else    
            if (laVelaEsta && prenderLaVela)
                mensajeSobreElEstadoDelaVela()
            else
                if (laVelaEsta && apagarLaVela)
                extinguirVela()
                else 
                    if(!laVelaEsta && apagarLaVela)
                    mensajeSobreElEstadoDelaVela()
    } 

    encenderLaVela()
    {
        let {vela} = this
        laVelaEsta = true
        vela.innerHTML = "La vela está encendida."
    }

    extinguirVela()
    {
        let {vela} = this
        laVelaEsta = false
        vela.innerHTML = "La vela está apagada."
    }

    mensajeSobreElEstadoDelaVela()
    {
        if (laVelaEsta) 
            vela.innerHTML = "La vela está encendida. <br> La vela ya está encendida."
        else 
            vela.innerHTML = "La vela está apagada. <br> La vela ya está pagada."
    }
}

function queHacemosConLaVela(evento)
{
    console.log(`prenderLaVela es: ${prenderLaVela}`)
    botonPrecionado = evento.target.value
    botonPrecionado === "Prender" ? prenderLaVela = true : apagarLaVela = true
    let claseVela = new AccionesConLaVela()
    prenderLaVela = false
    apagarLaVela = false
} 

let prenderLaVela = false
let apagarLaVela = false
let botonPrecionado = " " 
let laVelaEsta = false  
let encendido = document.getElementById("encendido")
let apagado = document.getElementById("apagado")
let vela = document.getElementById("vela")

encendido.addEventListener("click", queHacemosConLaVela)
apagado.addEventListener("click", queHacemosConLaVela)