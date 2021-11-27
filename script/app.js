

let menu = function () {
    let options = 1;
    let arreglo = []

    while (opcion != 5) {
        
        opcion = parseInt(prompt(`Ingrese una opcion: 1-agregar 2-eliminar producto 3-filtrat elemento 4-lista ordenada 5-Salir`))
        
        switch (opcion) {
            case 1:
                    arreglo.push(agregarProducto())
                break
            case 2:

                break
            case 3:

                break
            case 4:

                break
            case 5:
                return arreglo;
            
            default:
                opcion = parseInt(prompt(`Ingrese una opcion: 1-agregar 2-eliminar producto 3-filtrat elemento 4-lista ordenada 5-Salir`))
        }
    }
}

let agregarProducto = function () {
    return prompt("Ingresar producto: ")
}


