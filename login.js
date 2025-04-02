// Инициализация частиц
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#FF4500"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});

// Логика авторизации с тремя вариантами
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = [
    { username: "admin", password: "Expert1234", redirect: "main.html" },
    { username: "manager", password: "Manager1234", redirect: "files.html" },
    { username: "guest", password: "Guest1234", redirect: "baza.html" }
  ];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Сохранение статуса входа в sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
    // Перенаправление на страницу соответствующую пользователю
    window.location.href = user.redirect;
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}
