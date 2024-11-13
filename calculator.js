function appendToScreen(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  let input = document.getElementById('result').value;
  let result;

  try {
    result = eval(input);
    if (isNaN(result)) {
      result = 'Error';
    }
  } catch (error) {
    result = 'Error';
  }

  document.getElementById('result').value = result;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function deleteLastCharacter() {
  let input = document.getElementById('result').value;
  document.getElementById('result').value = input.slice(0, -1);
}

function calculateSquareRoot() {
  let input = document.getElementById('result').value;
  let result = Math.sqrt(eval(input));

  if (isNaN(result)) {
    result = 'Error';
  }

  document.getElementById('result').value = result;
}
