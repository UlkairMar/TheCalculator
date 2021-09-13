const monitorLines = document.querySelectorAll('.monitor div')
const numbers = document.querySelectorAll('.figures div')
const operators = document.querySelectorAll('.operators div')
const clear = document.querySelector('#clear')
const summary = document.querySelector('#summary')

const clearAll = () => monitorLines.forEach(line => line.textContent = '')

const stringsTwisting = () => monitorLines.forEach((line, index) =>
  index === monitorLines.length - 1
    ? monitorLines[index].textContent = ''
    : monitorLines[index].textContent = monitorLines[index + 1].textContent
)

const check = () => {
  let canAddOperation;

  if (monitorLines[4].textContent === ' ') {
    return false
  }

  switch (monitorLines[3].textContent) {
    case '+':
      return canAddOperation = false;
    case '-':
      return canAddOperation = false;
    case '*':
      return canAddOperation = false;
    case '/':
      return canAddOperation = false;
    default:
      return canAddOperation = true
  }
}

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  'x': (x, y) => x * y,
  '=': (x, y) => y
}

const calculate = () => {
  if (monitorLines[4].textContent !== '') {
    const first = Number(monitorLines[2].textContent);
    const second = Number(monitorLines[4].textContent);
    const operator = monitorLines[3].textContent;
    let result;

    if (operator === '/' && second === 0) {
      clearAll();
      monitorLines[2].textContent = 'Dividing by zero is illegal!!!';
      return;
    } else {
      result = operations[operator](first, second)
    }

    result = String(result);
    stringsTwisting();
    monitorLines[4].textContent = '=';
    stringsTwisting();
    monitorLines[4].textContent = result;
  }
}

let isDot = false

numbers.forEach(number => {
  number.onclick = () => {
    if (number.textContent === '0' && monitorLines[4].textContent === '') {
      isDot = true
      monitorLines[4].textContent = number.textContent + '.'
    } else if (number.textContent === '.' && monitorLines[4].textContent === '') {
      isDot = true
      monitorLines[4].textContent = '0' + number.textContent
    } else if (number.textContent === '.' && !isDot) {
      isDot = true
      monitorLines[4].textContent = monitorLines[4].textContent + number.textContent
    } else if (number.textContent !== '.') {
      monitorLines[4].textContent = monitorLines[4].textContent + number.textContent
    }
  }
})

operators.forEach(operator => {
  operator.onclick = () => {
    if (check()) {
      stringsTwisting()
      monitorLines[4].textContent = monitorLines[4].textContent + operator.textContent
      stringsTwisting()
    }
  }
})

clear.onclick = clearAll
summary.onclick = calculate