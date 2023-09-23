let button = document.querySelector('.btn');
let icon1 = document.querySelector('.icon_1')
let icon2 = document.querySelector('.icon_2')

button.addEventListener('click', () => {
    icon1.classList.toggle('icon_1');
    icon2.classList.toggle('icon_1');
})