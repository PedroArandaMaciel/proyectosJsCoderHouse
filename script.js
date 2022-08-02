function suma(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}
function calcularEntrada(cantidadDeEntradas = 1, edad = "") {
    const PRECIOMAYOR = 900
    const PRECIOMENOR = 450
    if (edad === "mayor") {
        return PRECIOMAYOR * cantidadDeEntradas
    } else if (edad === "menor") {
        return PRECIOMENOR * cantidadDeEntradas
    }
}
function entrada(pelicula, cantMayores, precioReservaMayores, cantMenores, precioReservaMenores, precioFinal) {
    return (`\n*********PELICULA: ${pelicula}\n*\n* ADULTOS: ${cantMayores} Mayores-------->ubTotal: $${precioReservaMayores}\n* CHICOS: ${cantMenores} Menores--------->SubTotal: $${precioReservaMenores}\n*\n*                        PRECIO FINAL: $${precioFinal}\n*********************************************`)
}
class reserva {
    constructor(pelicula = "", cantMayor = 0, cantMenor = 0, idReserva) {
        this.Pelicula = pelicula;
        this.Mayores = cantMayor;
        this.Menores = cantMenor;
        this.NumeroReserva = idReserva;
    }
}
alert("Bienvenido al sistema de reserva de entradas")
let repetir = true, conteoReserva = 1
while (repetir) {
    let pelicula, cantMayores = 0, cantMenores = 0, pregunta, precioReservaMayores = 0, precioReservaMenores = 0, precioFinal = 0

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

    /*const RESERVA = new reserva(pelicula, cantMayores, cantMenores, conteoReserva) //(Codigo a implementar, en revision)
    const RESERVASarray = []
    RESERVASarray.push(RESERVA)    //No agrega mas de un objeto, va variando las propiedades en vez de crear uno nuevo (conteoReserva si varia)
    conteoReserva++
    console.log(RESERVASarray)*/

    function cancelarReserva(idReserva) {
        RESERVASarray.splice(idReserva - 1, 1)
    }
    const RESERVA = new reserva("Avatar, El Camino Del Agua", 2, 3, 1)
    const RESERVA2 = new reserva("Los Minions", 1, 3, 2)
    const RESERVA3 = new reserva("La Casa Embrujada", 3, 0, 3)
    const RESERVA4 = new reserva("El Telefono Negro", 2, 0, 4)
    const RESERVASarray = [RESERVA, RESERVA2, RESERVA3, RESERVA4]
    console.log(RESERVASarray[0])
    cancelarReserva(1)
    console.log(RESERVASarray)

    if (cantMayores > 0) {
        precioReservaMayores = calcularEntrada(cantMayores, "mayor")
    }
    if (cantMenores > 0) {
        precioReservaMenores = calcularEntrada(cantMenores, "menor")
    }

    precioFinal = suma(precioReservaMayores, precioReservaMenores)
    console.log(entrada(pelicula, cantMayores, precioReservaMayores, cantMenores, precioReservaMenores, precioFinal))

    do {
        pregunta = prompt("Gracias por su reserva! Desea realizar otra? (SI/NO)").toLowerCase()
    } while (pregunta != "si" && pregunta != "no")
    if (pregunta == "no") {
        repetir = false
        alert("Gracias por utilizar nuestros servicios, puede revisar su reserva en la consola presionando: F12>console")
    }
}