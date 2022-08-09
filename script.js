class Reserva {
    constructor(pelicula = "", cantMayor = 0, cantMenor = 0, id) {
        this.Pelicula = pelicula;
        this.Mayores = cantMayor;
        this.Menores = cantMenor;
        this.Id = id;
    }
}
function suma(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}
function generarEntrada(pelicula, cantMayores, precioReservaMayores, cantMenores, precioReservaMenores, precioFinal) {
    return (`\n*********PELICULA: ${pelicula}\n*\n* ADULTOS: ${cantMayores} Mayores-------->SubTotal: $${precioReservaMayores}\n* CHICOS: ${cantMenores} Menores--------->SubTotal: $${precioReservaMenores}\n*\n*                        PRECIO FINAL: $${precioFinal}\n*********************************************`)
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
function insertarHtml() {
    const divEntradas = document.getElementById("divEntradas")
    reservas.forEach(reserva => {
        divEntradas.innerHTML += `
        <div class="cardReserva" id="reserva${reserva.Id}">
        <p>Pelicula: ${reserva.Pelicula}</p>
        <p>Mayores: ${reserva.Mayores}</p>
        <p>Menores: ${reserva.Menores}</p>
        <p>Numero de Reserva: ${reserva.Id}</p>
        <button id=btnReserva${reservas.length}>CANCELAR RESERVA</button>
        </div>
        `
    })
}
const reservas = []
let idReserva = 1
const formEntrada = document.getElementById("formEntrada")
formEntrada.addEventListener("submit", (event) => {
    event.preventDefault()
    let precioReservaMayores, precioReservaMenores
    let pelicula = document.getElementById("pelicula").value
    const cantMayores = parseInt(document.getElementById("mayor").value)
    const cantMenores = parseInt(document.getElementById("menor").value)
    if ((cantMayores != 0 || cantMenores != 0) && (pelicula != 0)) {
        const entrada = new Reserva(pelicula, cantMayores, cantMenores, idReserva)
        reservas.push(entrada)
        console.log(reservas)
        if (cantMayores > 0) {
            precioReservaMayores = calcularEntrada(cantMayores, "mayor")
        }
        if (cantMenores > 0) {
            precioReservaMenores = calcularEntrada(cantMenores, "menor")
        }
        precioFinal = suma(precioReservaMayores, precioReservaMenores)
        console.log(generarEntrada(pelicula, cantMayores, precioReservaMayores, cantMenores, precioReservaMenores, precioFinal))
        idReserva++
        insertarHtml()
    } else {
        console.log("Cantidad no valida")
    }
    formEntrada.reset()
})