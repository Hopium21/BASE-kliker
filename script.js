function createDot() {
    // Створити нову точку
    const dot = document.createElement('div');
    dot.classList.add('dot');

    // Випадкове розташування точки на екрані
    dot.style.top = Math.random() * window.innerHeight + 'px';
    dot.style.left = Math.random() * window.innerWidth + 'px';

    // Додати точку на сторінку
    document.body.appendChild(dot);

    // Видалити точку через 1 секунду
    setTimeout(() => {
        dot.remove();
    }, 1000);
}
