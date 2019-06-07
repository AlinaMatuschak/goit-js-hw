const country = prompt('Введите имя страны в которую будет осущественна доставка: ');
const toLowerCountry = country.toLowerCase();
let message;

switch (toLowerCountry) {
  case 'китай':
    message = `Доставка в ${toLowerCountry} будет стоить 100 кредитов`;
    break;

  case 'южная америка':
    message = `Доставка в ${toLowerCountry} будет стоить 250 кредитов`;
    break;

  case 'австралия':
    message = `Доставка в ${toLowerCountry} будет стоить 170 кредитов`;
    break;

  case 'индия':
    message = `Доставка в ${toLowerCountry} будет стоить 80 кредитов`;
    break;

  case 'ямайка':
    message = `Доставка в ${toLowerCountry} будет стоить 120 кредитов`;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
alert(message);
