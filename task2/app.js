const credits = 23580;
const pricePerDroid = 3000;
let message;

const howManyDroids = prompt('Какое количество вы хотите купить?');
if (!howManyDroids) {
  message = 'Отменено пользователем!';
} else {
  const totalPrice = Number(howManyDroids) * Number(pricePerDroid);

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    const remnant = Number(credits) - Number(totalPrice);
    message = `Вы купили ${howManyDroids} дроидов, на счету осталось ${remnant} кредитов.`;
  }
}

alert(message);
