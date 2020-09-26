const buttonShowFilm = document.getElementById('show_film');
const buttonShowPlanet = document.getElementById('planets');
const filmContainer = document.querySelector('.film_container');
const planetContainer = document.querySelector('.planet_container');
const imgChar = document.querySelector('.img_char');
const imgStar = document.querySelector('.img_star');

if (buttonShowFilm.classList.contains('tab-active')) {
    filmContainer.classList.add('tab-content--show');
    planetContainer.classList.add('tab-content--hidden');
    imgChar.classList.remove('img--disabled--right');
    imgStar.classList.add('img--disabled--left');
} 


buttonShowFilm.addEventListener('click', () => {
    if (!(buttonShowFilm.classList.contains('tab-active'))) {
        buttonShowPlanet.classList.remove('tab-active');
        buttonShowFilm.classList.add('tab-active');

        filmContainer.classList.remove('tab-content--hidden');
        filmContainer.classList.add('tab-content--show');

        planetContainer.classList.remove('tab-content--show');
        planetContainer.classList.add('tab-content--hidden');

        imgChar.classList.remove('img--disabled--right');
        imgStar.classList.add('img--disabled--left');
    } 
})


buttonShowPlanet.addEventListener('click', () => {
    if (!(buttonShowPlanet.classList.contains('tab-active'))) {
        buttonShowFilm.classList.remove('tab-active');
        buttonShowPlanet.classList.add('tab-active');

        filmContainer.classList.remove('tab-content--show');
        filmContainer.classList.add('tab-content--hidden');

        planetContainer.classList.remove('tab-content--hidden');
        planetContainer.classList.add('tab-content--show');

        imgChar.classList.add('img--disabled--right');
        imgStar.classList.remove('img--disabled--left');
    }
})

