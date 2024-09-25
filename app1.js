function appendToExpression(value) {
    const expressionInput = document.getElementById('expressionInput');
    expressionInput.value += value;
}

function clearExpression() {
    const expressionInput = document.getElementById('expressionInput');
    expressionInput.value = '';
    clearResult();
}

function evaluateExpression() {
    const expressionInput = document.getElementById('expressionInput');
    const resultInput = document.getElementById('resultInput');
    try {
        const result = eval(expressionInput.value);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'INVALID';
    }
}

function clearResult() {
    const resultInput = document.getElementById('resultInput');
    resultInput.value = '';
}
