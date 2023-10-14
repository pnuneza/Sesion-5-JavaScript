/**
 * Este código JavaScript se encarga de mostrar los datos de reserva almacenados en el Local Storage en la página de boleta.
 */
document.addEventListener("DOMContentLoaded", function () {
    /**
     * El evento "DOMContentLoaded" se dispara cuando el documento HTML se ha cargado completamente en el navegador.
     * El código dentro de esta función se ejecutará una vez que la página esté lista para ser manipulada.
     */

    const nameElement = document.getElementById("name");
    const checkInElement = document.getElementById("check-in");
    const checkOutElement = document.getElementById("check-out");
    const guestsElement = document.getElementById("guests");
    const roomElement = document.getElementById("room");
    const priceElement = document.getElementById("price");
    /**
     * Se obtienen referencias a elementos HTML con identificadores específicos que se utilizarán para mostrar los datos de reserva.
     */

    // Recupera los datos del Local Storage
    const name = localStorage.getItem("name");
    const checkIn = localStorage.getItem("checkIn");
    const checkOut = localStorage.getItem("checkOut");
    const guests = localStorage.getItem("guests");
    const room = localStorage.getItem("room");
    const price = localStorage.getItem("price");
    /**
     * Se recuperan los datos almacenados en el Local Storage, incluyendo el nombre, las fechas, el número de huéspedes, el número de habitación y el precio.
     */

    // Muestra los datos en la página
    nameElement.textContent = name;
    checkInElement.textContent = checkIn;
    checkOutElement.textContent = checkOut;
    guestsElement.textContent = guests;
    roomElement.textContent = room;
    priceElement.textContent = price;
    /**
     * Los datos recuperados del Local Storage se asignan a los elementos de la página para que se muestren en la boleta de reserva.
     */
});
