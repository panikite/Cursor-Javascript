
const BASE = 'https://swapi.dev/api/';

// Character info

function getInfo() {
    const filmNumber = document.getElementById('film_number');
    return axios.get(BASE + 'films/' + filmNumber.value)
        .then(res => {
            return res.data.characters;
        }).catch(( )=> alert("Such film doesn't exist. Please, type in number from 1 to 5."))
}



function renderCharInfo(url=[]) {
    const container = document.querySelector('.film_info');
    container.innerHTML = "";
    let icon_gender="";
    
    url.forEach((char) => {
        axios.get('https' + char.slice(4)).then((res) => {
            if (res.data.gender==='male') {
                icon_gender = './img/mars.svg';
            } else if (res.data.gender==='female') {
                icon_gender = './img/female.svg';
            }
            let hero = document.createElement('div');
            hero.className = 'hero';
            hero.innerHTML = `
                <h2 сlass="hero_name">${res.data.name}</h2>
                <p class="hero_birthdate"> ${res.data.birth_year} </p>
                <p> gender: ${res.data.gender} </p>
                <img class="gender_icon" src=${icon_gender}>
            `;
            container.append(hero);
        })
    })
}


const button = document.getElementById('info');

button.addEventListener('click', () => {
    getInfo().then(renderCharInfo)
});



// Planets info

const planets = document.getElementById('planets');
const nextPlanets = document.getElementById('planets_next');
const prevPlanets = document.getElementById('planets_previous');
let currentPagePlanet = 1;
const lastPagePlanet = 6;

nextPlanets.addEventListener('click', () => {
    currentPagePlanet < lastPagePlanet ?  currentPagePlanet++ : currentPagePlanet = 6
    getPlanets(currentPagePlanet)
})
prevPlanets.addEventListener('click', () => {
    currentPagePlanet > 1 ?  currentPagePlanet-- : currentPagePlanet = 1
    getPlanets(currentPagePlanet)
})


function getPlanets(currentPage = 1) {
    const planet_container = document.querySelector('.planet_info');
    const page = document.getElementById('planet_page');
    planet_container.innerHTML = "";
    page.innerHTML = currentPage;
    
    const config = {
        params: {
            page: currentPage
        }
    }
   
    const request = axios.get(BASE + 'planets?', config);
    request.then((res) => {
        res.data.results.forEach((planetItem) => {
            let planet = document.createElement('div');
            planet.classList.add('planet_name');
            planet.innerHTML = planetItem.name;
            planet_container.append(planet);
        })
    })
}

planets.addEventListener('click', () => getPlanets())


