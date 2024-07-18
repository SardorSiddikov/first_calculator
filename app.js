function appendValue(value) {
    let display = document.calculator.display.value;
    if (display === '0' && value !== '.') {
        display = value;
    } else {
        display += value;
    }
    document.calculator.display.value = display;
}

function appendOperator(operator) {
    let display = document.calculator.display.value;
    let lastChar = display[display.length - 1];
    if ('+-*/'.includes(lastChar)) {
        display = display.slice(0, -1) + operator;
    } else {
        display += operator;
    }
    document.calculator.display.value = display;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function backspace() {
    let display = document.calculator.display.value;
    if (display.length > 0) {
        display = display.slice(0, -1);
    } else {
        display = '0'; // Ekran bo'sh qolganda 0 ni qo'yish
    }
    document.calculator.display.value = display;
}


function calculate() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (e) {
        alert('Invalid expression');
    }
}
