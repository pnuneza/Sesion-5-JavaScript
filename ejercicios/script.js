/**
 * Este código JavaScript maneja la lógica del formulario de reserva en la página web.
 */

document.addEventListener("DOMContentLoaded", function () {
    /**
     * El evento "DOMContentLoaded" se dispara cuando el documento HTML se ha cargado completamente en el navegador.
     * El código dentro de esta función se ejecutará una vez que la página esté lista para ser manipulada.
     */

    const bookingForm = document.getElementById("booking-form");
    /**
     * Se obtiene una referencia al formulario de reserva a través de su identificador "booking-form".
     */

    bookingForm.addEventListener("submit", function (event) {
        /**
         * Se agrega un oyente de eventos al formulario para el evento "submit".
         * Cuando el usuario envía el formulario, se ejecutará la función anónima proporcionada como argumento.
         */

        event.preventDefault();
        /**
         * Se previene el comportamiento predeterminado del formulario, que sería el envío a una página diferente, lo que permitirá la manipulación de los datos antes de redirigir.

         */

        const name = document.getElementById("name").value;
        const checkIn = document.getElementById("check-in").value;
        const checkOut = document.getElementById("check-out").value;
        const guests = document.getElementById("guests").value;
        /**
         * Se recopilan los datos ingresados por el usuario desde los campos del formulario, incluyendo el nombre, la fecha de llegada, la fecha de salida y el número de huéspedes.
         */

        const room = Math.floor(Math.random() * 100) + 1;
        /**
         * Se genera un número de habitación aleatorio entre 1 y 100.
         */

        const price = 200 * ((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
        /**
         * Se calcula el precio de la reserva en función de la diferencia de días entre la fecha de llegada y la fecha de salida.
         */

        // Guarda los datos en el Local Storage
        localStorage.setItem("name", name);
        localStorage.setItem("checkIn", checkIn);
        localStorage.setItem("checkOut", checkOut);
        localStorage.setItem("guests", guests);
        localStorage.setItem("room", room);
        localStorage.setItem("price", price);
        /**
         * Los datos de la reserva, incluyendo el nombre, las fechas, el número de huéspedes, el número de habitación y el precio, se almacenan en el Local Storage del navegador para su posterior recuperación.
         */

        // Redirige al usuario a la página de la boleta
        window.location.href = "boleta.html";
        /**
         * Finalmente, el usuario es redirigido a la página "boleta.html" para mostrar la información de la reserva en la boleta.
         */
    });
});
