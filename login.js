// Функция для декодирования base64
function decodeBase64(str) {
  return atob(str);
}

// Логика авторизации с кодированными логинами и паролями
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Пример логинов и паролей в base64
  const users = [
    { username: "admin", password: "Expert1234", redirect: "main.html" },
    { username: "manager", password: "Manager1234", redirect: "manager-dashboard.html" },
    { username: "guest", password: "Guest1234", redirect: "guest-home.html" }
  ];

  // Преобразуем логины и пароли в base64
  const encodedUsers = users.map(user => ({
    username: btoa(user.username),
    password: btoa(user.password),
    redirect: user.redirect
  }));

  const encodedUsername = btoa(username);
  const encodedPassword = btoa(password);

  const user = encodedUsers.find(u => u.username === encodedUsername && u.password === encodedPassword);

  if (user) {
    // Сохранение статуса входа в sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    // Перенаправление на соответствующую страницу
    window.location.href = user.redirect;
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}
