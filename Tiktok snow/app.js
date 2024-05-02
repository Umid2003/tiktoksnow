const body = document.querySelector('body')

setInterval(() => snowing('white'), 100);

function snowing(color) {
    const snow = document.createElement('i')
    snow.classList.add('fa-solid')
    snow.classList.add('fa-snowflake')

    snow.style.left = `${Math.random() * window.innerWidth}px`
    snow.style.fontSize = `${Math.random() * 10 + 7}px`
    snow.style.opacity = `${Math.random()}`
    snow.style.animationDuration = `${Math.random() * 5 + 1}s`
    snow.style.color = color

    body.appendChild(snow)

    setTimeout(() => {
        snow.remove()
    }, 5000);
}

const sun = document.querySelector('.fa-sun')
const moon = document.querySelector('.fa-moon')

sun.addEventListener('click', () => snowFall('white', 'darkblue'))
moon.addEventListener('click', () => snowFall('darkblue', 'white'))

function snowFall(color, color1) {
    body.style.backgroundColor = color
    sun.style.color = color1
    moon.style.color = color1
    setInterval(() => snowing(color1), 100);
}