let pelicula, cantMayores, cantMenores, pregunta
let repetir = true
alert("Bienvenido al sistema de reserva de entradas")
while (repetir) {
    pelicula = parseInt(prompt("SISTEMA DE RESERVA DE ENTRADAS\n Por favor escriba el numero segun corresponda\n 1) El Telefono Negro\n 2) La Casa Embrujada 2\n 3)Los Minions\n 4)Avatar, El Camino Del Agua"))
    cantMayores = parseInt(prompt("Cuantas entradas para MAYORES desea reservar?"))
    cantMenores = parseInt(prompt("Cuantas entradas para MENORES desea reservar?"))

    if (isNaN(cantMayores) || isNaN(cantMenores)) {
        alert("Cantidad ingresada no valida, por favor intente nuevamente utilizando solo numeros")
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
    console.log(`La pelicula seleccionada es ${pelicula}. Para ${cantMayores} mayores y ${cantMenores} menores`)

    pregunta = prompt("Gracias por su reversa! Desea realizar otra? (SI/NO)").toLowerCase()
    if (pregunta == "no" || pregunta == "no gracias") {
        repetir = false
        alert("Gracias por utilizar nuestros servicios, puede revisar su reserva en la consola presionando: F12>console")
    }
}