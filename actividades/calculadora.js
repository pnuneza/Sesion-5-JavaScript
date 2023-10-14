// Obtiene una referencia al elemento con el ID "display" en el documento HTML.
const display = document.getElementById("display");

/**
 * Agrega un valor al contenido del elemento "display".
 *
 * @param {string} value - El valor que se agregará al elemento "display".
 */
function appendToDisplay(value) {
  display.value += value;
}

/**
 * Limpia el contenido del elemento "display", estableciéndolo en una cadena vacía.
 */
function clearDisplay() {
  display.value = "";
}

/**
 * Realiza un cálculo basado en la expresión en el elemento "display" y muestra el resultado.
 * Si se produce un error en el cálculo, se muestra "Error" en lugar del resultado.
 */
function calculateResult() {
  try {
    // Evalúa la expresión en el elemento "display".
    const result = eval(display.value);

    // Verifica si el resultado es indefinido o no es un número (NaN).
    if (result === undefined || isNaN(result)) {
      display.value = "Error";
    } else {
      // Muestra el resultado en el elemento "display".
      display.value = result;
    }
  } catch (error) {
    // En caso de un error durante el cálculo, muestra "Error".
    display.value = "Error";
  }
}
