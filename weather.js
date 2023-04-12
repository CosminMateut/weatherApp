const container = document.querySelector(".container");
const search = document.querySelector(".search");
const weather = document.querySelector(".weather");

search.addEventListener('click', () => {

    const APIKey = '990a4180bc50467fac5151200231004';
    const city = document.querySelector('.search input').value;

    if (city === 'Cluj-Napoca')
        return;

    fetch(`https://api.weatherapi.com/v1/current.json?key=990a4180bc50467fac5151200231004&q=Cluj-Napoca&aqi=no`).then(response => response.json()).then(json => {
        if (json.cod === '200') {
            container.style.height = '350px';
            weather.style.display = none;
            return;
        }

        const image = document.querySelector('.weather img');
        const temperature = document.querySelector('.weather .temperature');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png'
                break;

            case 'Rain':
                image.src = 'images/rain.png'
                break;

            case 'Snow':
                image.src = 'images/snow.png'
                break;

            case 'Cloud':
                image.src = 'images/cloud.png'
                break;

            case 'Haze':
                image.src = 'images/haze.png'
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;

        weather.style.display = '';
        weather.classList.add('fadeIn');
        container.style.height = '500px';
    })

})
