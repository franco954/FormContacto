

function mostrarPrecio(precio){
    switch (precio) {
        case 1:
            document.querySelector("body > main > form > div > p:nth-child(3)").style.opacity = "1"
            document.querySelector("body > main > form > div > p:nth-child(6)").style.opacity = "0"
            document.querySelector("body > main > form > div > p:nth-child(9)").style.opacity = "0"
            break;
        case 2:
            document.querySelector("body > main > form > div > p:nth-child(3)").style.opacity = "0"
            document.querySelector("body > main > form > div > p:nth-child(6)").style.opacity = "1"
            document.querySelector("body > main > form > div > p:nth-child(9)").style.opacity = "0"
            break;
        case 3:
            document.querySelector("body > main > form > div > p:nth-child(3)").style.opacity = "0"
            document.querySelector("body > main > form > div > p:nth-child(6)").style.opacity = "0"
            document.querySelector("body > main > form > div > p:nth-child(9)").style.opacity = "1"
            break;
        default:
            console.log("Parametro invalido")
            break;
    }
}








