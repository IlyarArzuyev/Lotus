// Функция для шифрования данных
function encryptData(data, secretKey) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Функция для дешифрования данных
function decryptData(encryptedData, secretKey) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Логика авторизации с шифрованием
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ключ для шифрования (можно использовать более сложный)
  const secretKey = 'mySecretKey';

  // Шифруем логин и пароль
  const encryptedUsername = encryptData(username, secretKey);
  const encryptedPassword = encryptData(password, secretKey);

  // Пример хардкодированных шифрованных данных для логинов и паролей
  const validUsername = encryptData('admin', secretKey);
  const validPassword = encryptData('Expert1234', secretKey);

  if (encryptedUsername === validUsername && encryptedPassword === validPassword) {
    // Сохранение статуса входа в sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    // Перенаправление на нужную страницу
    window.location.href = "main.html";
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}
