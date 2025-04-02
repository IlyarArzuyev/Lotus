<?php
session_start();

// База пользователей (логины и пароли)
$users = [
    "user1" => "password123",
    "user2" => "qwerty456",
    "user3" => "secret789",
];

// Список редиректов
$redirects = [
    "user1" => "https://ilyararzuyev.github.io/Lotus/main.html",
    "user2" => "calc.html",
    "user3" => "page3.html",
];

// Получаем данные из формы
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Проверяем логин и пароль
if (isset($users[$username]) && $users[$username] === $password) {
    $_SESSION['user'] = $username; // Запоминаем пользователя
    header("Location: " . $redirects[$username]); // Перенаправляем
    exit;
} else {
    echo "<script>alert('Неверный логин или пароль!'); window.location.href='index.html';</script>";
}
?>
