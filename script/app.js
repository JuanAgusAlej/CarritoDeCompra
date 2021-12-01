

const menu = function () {
    let opcion = 1
    let arreglo = []


    while (opcion != 5 && opcion) {
        
        opcion = parseInt(prompt(`Ingrese una opcion: 1-agregar 2-eliminar producto 3-filtrat elemento 4-lista ordenada 5-Salir`))
        if(opcion){
            switch (opcion) {
                case 1:
                    const producto = agregarProducto(arreglo) 
                    if (producto != -1) {
                        arreglo.push(producto)
                    }
                        
                    break
                case 2:
                        arreglo = eliminarProducto(arreglo)
                    break
                case 3:
                        filtrarBusqueda(arreglo)
                    break
                case 4:
                    console.log(arreglo)
                    arreglo = ordenarAlfabeto(arreglo)
                    console.log(arreglo)
                    break
                case 5:
                    return arreglo;
                
                default:
                    opcion = parseInt(prompt(`Ingrese una opcion: 1-agregar 2-eliminar producto 3-filtrat elemento 4-lista ordenada 5-Salir`))
            }
        }
    }
}

const agregarProducto = function (lista) {

    let agregar = prompt("Ingresar producto: ")
    if (agregar) {
        let busqueda = lista.find(function (objetos) {
            return objetos.toUpperCase() === agregar.toUpperCase()
        })
        // console.log(busqueda)
        if (busqueda) {
            return -1
     
        } else {
        
            return agregar
        }
    }
    
    
}

const eliminarProducto = function (arreglo) {
    let producto = prompt(`Ingresar producto a eliminar`).toUpperCase()
   if(producto){
       arreglo.splice(arreglo.indexOf(producto), 1)
       return arreglo
   }
}
const ordenarAlfabeto = function (arreglo) {
    return arreglo.sort()
}

const filtrarBusqueda = function (lista) {
    
    let filtrar = prompt("Filtrar por producto: ")
    if (filtrar) {
        let filtro = lista.filter(function (producto) {
            producto = producto.toUpperCase()
            return producto.includes(filtrar.toUpperCase())
        })
        //console.log(filtro[0])
        if (filtro[0] !== undefined) {
    //        console.log("entro")
            return console.log(filtro)
        } else {
      //      console.log("salio")
            return console.log("No se encontro producto")
        }

    }
    
    
}