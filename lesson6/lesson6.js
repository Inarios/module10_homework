let button = document.querySelector('.btn_window');

button.addEventListener('click', () => {
    let width = window.screen.width;
    let height = window.screen.height;
    alert(`Размер вашего экрана: ${width}x${height}`);
})