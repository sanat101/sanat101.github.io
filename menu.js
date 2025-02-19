// Выбор элементов
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Добавление обработчиков событий
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && event.target !== menuToggle) {
        navbar.classList.remove('active');
    }
});