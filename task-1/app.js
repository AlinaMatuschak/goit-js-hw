let input;
const numbers = [];
let total = 0;
let inputNumber;

while (true) {
  input = prompt('Введите чесло');
  inputNumber = Number(input);

  if (!input) break;

  if (Number.isNaN(inputNumber)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(inputNumber);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total += Number(numbers[i]);
}

alert(total);
