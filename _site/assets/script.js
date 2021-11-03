/* 
const toggle = document.getElementById('themeToggle')
const buttonIcon = document.getElementById('buttonIcon')

toggle.addEventListener('click', changeTheme)

function changeTheme() {
    const theme = document.documentElement.getAttribute('data-theme');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem("data-theme", "light")
        buttonIcon.classList.remove('gg-sun'); // remove moon icon
        buttonIcon.classList.add('gg-moon'); // add sun icon
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem("data-theme", "dark")
        buttonIcon.classList.remove('gg-moon'); // remove sun icon
        buttonIcon.classList.add('gg-sun'); // ad moon icon
    }
} */

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

/*
document.getElementById("themeToggle").classList.add('gg-moon');
document.getElementById("themeToggle").classList.remove('gg-sun');

document.getElementById("themeToggle").classList.add('gg-sun');
document.getElementById("themeToggle").classList.remove('gg-moon');
*/