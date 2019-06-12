const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

do {
  const init = prompt('Введите пароль');

  if (passwords.includes(init)) {
    alert('Добро пожаловать!');
    break;
  } else if (!init) {
    alert('Cancel');
    break;
  } else if (attemptsLeft > 1) {
    attemptsLeft -= 1;
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }
} while (attemptsLeft >= 0);
