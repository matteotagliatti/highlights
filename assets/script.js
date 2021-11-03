const toggle = document.getElementById('themeToggle')
const buttonIcon = document.getElementById('buttonIcon')

toggle.addEventListener('click', modeSwitcher)

function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        buttonIcon.classList.remove('gg-moon'); // remove moon icon
        buttonIcon.classList.add('gg-sun'); // add sun icon
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        buttonIcon.classList.remove('gg-sun'); // remove sun icon
        buttonIcon.classList.add('gg-moon'); // ad moon icon
    }
}

let theme = localStorage.getItem('theme');
theme = theme || (window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');
setTheme(theme);

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}