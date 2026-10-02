let calculation = '';

      // Function to add numbers and operators to the calculation
      function updateCalculation(value) {
        calculation += value;
        displayCalculation();
      }

      // Function to run the math and show the final answer
      function calculateResult() {
        // eval() automatically solves string math like "2 + 2"
        calculation = eval(calculation);
        displayCalculation();
      }

      // Function to wipe the screen clean
      function clearCalculation() {
        calculation = '';
        displayCalculation();
      }

      // Function that handles updating the HTML text on the screen
      function displayCalculation() {
        document.querySelector('.js-display').innerHTML = calculation;
        console.log(calculation); // Still logs to console just in case
      }
      // Function to add numbers and operators to the calculation
      function updateCalculation(value) {
        // If the screen is empty, prevent starting with * or /
        if (calculation === '' && (value === ' * ' || value === ' / ')) {
          return; // The 'return' keyword instantly stops the function here
        }

        calculation += value;
        displayCalculation();
      }