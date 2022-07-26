function suma(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}
function entradaMayores(cantidadDeEntradas = 1) {
    const PRECIO = 900
    return cantidadDeEntradas * PRECIO
}
function entradaMenores(cantidadDeEntradas = 1) {
    const PRECIO = 450
    return cantidadDeEntradas * PRECIO
}
alert("Bienvenido al sistema de reserva de entradas")
let repetir = true
while (repetir) {
    let pelicula, cantMayores, cantMenores, pregunta, precioReservaMayores = 0, precioReservaMenores = 0, precioFinal = 0

    pelicula = parseInt(prompt("SISTEMA DE RESERVA DE ENTRADAS\n Por favor escriba el numero segun corresponda\n 1) El Telefono Negro\n 2) La Casa Embrujada 2\n 3)Los Minions\n 4)Avatar, El Camino Del Agua"))
    cantMayores = parseInt(prompt("Cuantas entradas para MAYORES desea reservar?"))
    cantMenores = parseInt(prompt("Cuantas entradas para MENORES desea reservar?"))

    if ((isNaN(cantMayores) || isNaN(cantMenores)) || (cantMayores === 0 && cantMenores === 0)) {
        alert("Cantidad de entradas ingresada no valida, por favor intente nuevamente")
        console.log("Cantidad no validad")
        continue
    }
    switch (pelicula) {
        case 1:
            pelicula = "El Telefono Negro"
            break
        case 2:
            pelicula = "La Casa Embrujada"
            break
        case 3:
            pelicula = "Los Minions"
            break
        case 4:
            pelicula = "Avatar, El Camino Del Agua"
            break
        default:
            alert("Pelicula no valida, por favor intente de nuevo")
            console.log("Ingreso de pelicula no valida")
            continue
    }
    alert(`La pelicula seleccionada es ${pelicula}. Para ${cantMayores} mayores y ${cantMenores} menores`)
    
    if (cantMayores > 0) {
        precioReservaMayores = entradaMayores(cantMayores)
    }
    if (cantMenores > 0) {
        precioReservaMenores = entradaMenores(cantMenores)
    }

    precioFinal = suma(precioReservaMayores, precioReservaMenores)
    console.log(`\n*********PELICULA: ${pelicula}\n*\n* ADULTOS: ${cantMayores} Mayores-------->SubTotal: $${precioReservaMayores}\n* CHICOS: ${cantMenores} Menores--------->SubTotal: $${precioReservaMenores}\n*\n*                        PRECIO FINAL: $${precioFinal}\n*********************************************`)
    
    do {
        pregunta = prompt("Gracias por su reserva! Desea realizar otra? (SI/NO)").toLowerCase()
    } while (pregunta != "si" && pregunta != "no")
    if (pregunta == "no") {
        repetir = false
        alert("Gracias por utilizar nuestros servicios, puede revisar su reserva en la consola presionando: F12>console")
    }
}