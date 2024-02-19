let displayValue = '0'; //This declares a variable displayValue and initializes it with the value '0'. This variable represents the current value displayed on the calculator.

/*This defines a function named updateDisplay(). 
This function updates the display element with the current value of displayValue. 
It selects the element with the id 'display' using document.getElementById('display') and sets its innerText property to the value of displayValue.
*/
function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

//This defines a function named clearDisplay(). When called, it resets the displayValue variable to '0' and updates the display by calling updateDisplay().
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

/*This defines a function named appendValue(value). 
It takes a parameter value representing the value to append to the displayValue. 
If the current displayValue is '0' and the input value is not a decimal point ('.'), it replaces '0' with the input value.
 Otherwise, it appends the input value to the current displayValue. 
 After updating the displayValue, it calls updateDisplay() to reflect the changes on the display.
 */
function appendValue(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

/*This defines a function named calculate(). 
Inside this function, it tries to evaluate the expression stored in displayValue using the eval() function. 
If successful, it converts the result to a string and assigns it to displayValue. 
If an error occurs during evaluation (e.g., syntax error), it sets displayValue to 'Error'. 
Then, it updates the display by calling updateDisplay().
*/
function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

/*This line calls the updateDisplay() function once when the script is initially executed.
It ensures that the display is initialized with the default value '. 
*/
updateDisplay();