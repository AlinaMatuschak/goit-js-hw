const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const isValid = login.lenght >= 4 && login.lenght <= 16;
  console.log('login: ', login);
  console.log('login.lenght: ', login.lenght);
  return isValid;
};

const isLoginUnique = function (allLogins, login) {
  const isIncludes = allLogins.includes(login);
  return isIncludes;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) return console.log('Ошибка! Логин должен быть от 4 до 16 символов');

  if (isLoginUnique(allLogins, login)) return console.log('Такой логин уже используется!');

  logins.push(login);
  return console.log('Логин успешно добавлен!');
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'