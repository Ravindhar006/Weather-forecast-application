// const userlocation = document.getElementById("userlocation");
// const converter = document.getElementById("converter");
// const weathericon = document.querySelector(".weathericon");
// const temperature = document.querySelector(".temperature");
// const feelslike = document.querySelector(".feelslike");
// const description = document.querySelector(".description");
// const date = document.querySelector(".date");
// const city = document.querySelector(".city");
// const hvalue = document.getElementById("hvalue");
// const wvalue = document.getElementById("wvalue");
// const srvalue = document.getElementById("srvalue");
// const ssvalue = document.getElementById("ssvalue");
// const cvalue = document.getElementById("cvalue");
// const uvvalue = document.getElementById("uvvalue");
// const pvalue = document.getElementById("pvalue");
// const forecast = document.querySelector(".forecast");

// let currentTemp = 0;
// let currentFeelsLike = 0;

// const WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=a5bb4718b30b6f58f58697997567fffa&units=metric&q=`;
// const WEATHER_DATA_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f58f58697997567fffa&exclude=minutely&units=metric&`;

// // Add event listener for Enter key
// userlocation.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         finduserlocation();
//     }
// });

// // Add event listener for temperature conversion
// converter.addEventListener('change', function () {
//     if (!currentTemp) return; // Don't convert if no temperature data

//     if (this.value === '°F') {
//         const fahrenheitTemp = (currentTemp * 9 / 5) + 32;
//         const fahrenheitFeelsLike = (currentFeelsLike * 9 / 5) + 32;
//         temperature.innerHTML = Math.round(fahrenheitTemp);
//         feelslike.innerHTML = `Feels like: ${Math.round(fahrenheitFeelsLike)}°`;
//     } else {
//         temperature.innerHTML = Math.round(currentTemp);
//         feelslike.innerHTML = `Feels like: ${Math.round(currentFeelsLike)}°`;
//     }
// });

// function updateWeatherBackground(weatherType) {
//     const body = document.body;
//     body.className = ''; // Reset any existing classes

//     switch (weatherType) {
//         case 'clear':
//             body.classList.add('sunny');
//             break;
//         case 'rain':
//             body.classList.add('rainy');
//             break;
//         // Add more cases for different weather conditions
//         default:
//             body.classList.add('default-weather');
//             break;
//     }
// }

// function finduserlocation() {
//     if (!userlocation.value.trim()) {
//         alert('Please enter a location');
//         return;
//     }

//     fetch(WEATHER_API_ENDPOINT + encodeURIComponent(userlocation.value))
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.cod !== 200) {
//                 alert(data.message || 'Error fetching weather data');
//                 return;
//             }

//             // Store current temperature values
//             currentTemp = data.main.temp;
//             currentFeelsLike = data.main.feels_like;

//             // Update UI with weather data
//             city.innerHTML = `${data.name}, ${data.sys.country}`;

//             // Set temperature based on current unit selection
//             if (converter.value === '°F') {
//                 const fahrenheitTemp = (currentTemp * 9 / 5) + 32;
//                 const fahrenheitFeelsLike = (currentFeelsLike * 9 / 5) + 32;
//                 temperature.innerHTML = Math.round(fahrenheitTemp);
//                 feelslike.innerHTML = `Feels like: ${Math.round(fahrenheitFeelsLike)}°`;
//             } else {
//                 temperature.innerHTML = Math.round(currentTemp);
//                 feelslike.innerHTML = `Feels like: ${Math.round(currentFeelsLike)}°`;
//             }

//             description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp;${data.weather[0].description}`;

//             // Update current date
//             const currentDate = new Date();
//             date.innerHTML = currentDate.toLocaleDateString('en-US', {
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//             });

//             // Update weather metrics
//             hvalue.innerHTML = `${Math.round(data.main.humidity)}<span>%</span>`;
//             wvalue.innerHTML = `${Math.round(data.wind.speed)}<span>m/s</span>`;
//             cvalue.innerHTML = `${data.clouds.all}<span>%</span>`;
//             uvvalue.innerHTML = data.main.grnd_level || 'N/A';
//             pvalue.innerHTML = `${data.main.pressure}<span>hPa</span>`;

//             // Update weather icon
//             const iconCode = data.weather[0].icon;
//             weathericon.style.background = `url(https://openweathermap.org/img/wn/${iconCode}@2x.png)`;
//             weathericon.style.backgroundSize = 'contain';
//             weathericon.style.backgroundRepeat = 'no-repeat';
//             weathericon.style.backgroundPosition = 'center';

//             // Update weather background animation
//             updateWeatherBackground(data.weather[0].main.toLowerCase());

//             // Fetch additional weather data
//             return fetch(`${WEATHER_DATA_ENDPOINT}&lon=${data.coord.lon}&lat=${data.coord.lat}`);
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Additional weather data:', data);
//             // Add any additional weather data processing here
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             alert('Error fetching weather data. Please try again.');
//         });
// }

// // Initialize with default background
// document.querySelector('.weather-bg').classList.add('clear');





 
const userlocation = document.getElementById("userlocation");
const converter = document.getElementById("converter");
const weathericon = document.querySelector(".weathericon");
const temperature = document.querySelector(".temperature");
const feelslike = document.querySelector(".feelslike");
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const city = document.querySelector(".city");
const hvalue = document.getElementById("hvalue");
const wvalue = document.getElementById("wvalue");
const srvalue = document.getElementById("srvalue");
const ssvalue = document.getElementById("ssvalue");
const cvalue = document.getElementById("cvalue");
const uvvalue = document.getElementById("uvvalue");
const pvalue = document.getElementById("pvalue");
const forecast = document.querySelector(".forecast");

let currentTemp = 0;
let currentFeelsLike = 0;

const WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=a5bb4718b30b6f58f58697997567fffa&units=metric&q=`;
const WEATHER_DATA_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f58f58697997567fffa&exclude=minutely&units=metric&`;

// Add event listener for Enter key
userlocation.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        finduserlocation();
    }
});

// Add event listener for temperature conversion
converter.addEventListener('change', function () {
    if (!currentTemp) return; // Don't convert if no temperature data

    if (this.value === '°F') {
        const fahrenheitTemp = (currentTemp * 9 / 5) + 32;
        const fahrenheitFeelsLike = (currentFeelsLike * 9 / 5) + 32;
        temperature.innerHTML = Math.round(fahrenheitTemp);
        feelslike.innerHTML = `Feels like: ${Math.round(fahrenheitFeelsLike)}°`;
    } else {
        temperature.innerHTML = Math.round(currentTemp);
        feelslike.innerHTML = `Feels like: ${Math.round(currentFeelsLike)}°`;
    }
});

function updateWeatherBackground(weatherType) {
    const body = document.body;
    body.className = ''; // Reset any existing classes

    switch (weatherType) {
        case 'clear':
            body.classList.add('sunny');
            break;
        case 'rain':
            body.classList.add('rainy');
            break;
        // Add more cases for different weather conditions
        default:
            body.classList.add('default-weather');
            break;
    }
}

function finduserlocation() {
    if (!userlocation.value.trim()) {
        alert('Please enter a location');
        return;
    }

    fetch(WEATHER_API_ENDPOINT + encodeURIComponent(userlocation.value))
        .then((response) => response.json())
        .then((data) => {
            if (data.cod !== 200) {
                alert(data.message || 'Error fetching weather data');
                return;
            }

            // Store current temperature values
            currentTemp = data.main.temp;
            currentFeelsLike = data.main.feels_like;

            // Update UI with weather data
            city.innerHTML = `${data.name}, ${data.sys.country}`;

            // Set temperature based on current unit selection
            if (converter.value === '°F') {
                const fahrenheitTemp = (currentTemp * 9 / 5) + 32;
                const fahrenheitFeelsLike = (currentFeelsLike * 9 / 5) + 32;
                temperature.innerHTML = Math.round(fahrenheitTemp);
                feelslike.innerHTML = `Feels like: ${Math.round(fahrenheitFeelsLike)}°`;
            } else {
                temperature.innerHTML = Math.round(currentTemp);
                feelslike.innerHTML = `Feels like: ${Math.round(currentFeelsLike)}°`;
            }

            description.innerHTML = `<i class="fa-brands fa-cloudversify"></i> &nbsp;${data.weather[0].description}`;

            // Update current date
            const currentDate = new Date();
            date.innerHTML = currentDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Update weather metrics
            hvalue.innerHTML = `${Math.round(data.main.humidity)}<span>%</span>`;
            wvalue.innerHTML = `${Math.round(data.wind.speed)}<span>m/s</span>`;
            cvalue.innerHTML = `${data.clouds.all}<span>%</span>`;
            uvvalue.innerHTML = data.main.grnd_level || 'N/A';
            pvalue.innerHTML = `${data.main.pressure}<span>hPa</span>`;

            // Convert sunrise and sunset times to a readable format
            const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });
            const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            });

            srvalue.innerHTML = sunriseTime;
            ssvalue.innerHTML = sunsetTime;

            // Update weather icon
            const iconCode = data.weather[0].icon;
            weathericon.style.background = `url(https://openweathermap.org/img/wn/${iconCode}@2x.png)`;
            weathericon.style.backgroundSize = 'contain';
            weathericon.style.backgroundRepeat = 'no-repeat';
            weathericon.style.backgroundPosition = 'center';

            // Update weather background animation
            updateWeatherBackground(data.weather[0].main.toLowerCase());

            // Fetch additional weather data
            return fetch(`${WEATHER_DATA_ENDPOINT}&lon=${data.coord.lon}&lat=${data.coord.lat}`);
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Additional weather data:', data);
            // Add any additional weather data processing here
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

// Initialize with default background
document.querySelector('.weather-bg').classList.add('clear');
