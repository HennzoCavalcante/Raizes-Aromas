/* ----------------- Manu Hamburguer ----------------- */
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-X")
let sombra = document.getElementById("sombra")

function AbreFechaMenu() {
    //Se o menu está fechado 
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir o menu
        menu.style.right = "0"

        //Mostar o icone X
        iconeX.style.display = "inline"
        //Escoder o icone de barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"
    }else{
        //Fechar o menu
        menu.style.right = "-210px"

        //Esconder o icone X
        iconeX.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.right = "inline"

        //Esconder a sombra
        sombra.style.right = "-101vw"
    }
}