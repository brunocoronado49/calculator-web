const display = document.querySelector('#display');

// Agrega el contenido del input al display
function appendToDisplay(input) {
  display.value += input;
}

// Limpiamos el input
function clearDisplay() {
  display.value = '';
}

// Hacemos los calculos con la funcion eval
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}

document.querySelector('#keys').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
      calculate();
    } else if (buttonValue === 'C') {
      clearDisplay();
    } else {
      appendToDisplay(buttonValue);
    }
  }
});
