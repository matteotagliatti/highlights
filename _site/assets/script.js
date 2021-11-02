const toggle = document.getElementById('themeToggle')
const buttonIcon = document.getElementById('buttonIcon')

toggle.addEventListener('click', changeTheme)

function changeTheme() {
    const theme = document.documentElement.getAttribute('data-theme');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        buttonIcon.classList.remove('gg-sun'); // remove moon icon
        buttonIcon.classList.add('gg-moon'); // add sun icon
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        buttonIcon.classList.remove('gg-moon'); // remove sun icon
        buttonIcon.classList.add('gg-sun'); // ad moon icon
    }
}