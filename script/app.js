

let menu = function () {
    let opcion = 1
    let arreglo = []

    while (opcion != 5) {
        
        opcion = parseInt(prompt(`Ingrese una opcion: 1-agregar 2-eliminar producto 3-filtrat elemento 4-lista ordenada 5-Salir`))
        
        switch (opcion) {
            case 1:
                    arreglo.push(agregarProducto())
                break
            case 2:
                    arreglo = eliminarProducto(arreglo)
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

let eliminarProducto = function (arreglo) {
    let producto = prompt(`Ingresar producto a eliminar`)
    let buscar = true;
    while (buscar) {
        buscar = false;
        if (arreglo.indexOf(producto)!=-1) {
            arreglo.splice(arreglo.indexOf(producto), 1)
         //   console.log("entro")
            buscar = true;
        }
        //console.log("afuera")
    }
    /*console.log(arreglo.indexOf(producto))
    arreglo.splice(arreglo.indexOf(producto), 1)*/
    return arreglo
}
