let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length === 1 || display.textContent === 'Error') {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function appendToDisplay(value) {
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.textContent = 'Error';
    }
}
