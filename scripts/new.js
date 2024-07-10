
const span = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('figcaption');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=3707d031b693ba1a997378fffcf8b394';
async function apiFetch() {
    try{
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    console.log(data);
    function displayResults(data) {
        span.innerHTML = `${data.main.temp}&deg;C`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', 'weather-icon for current weather');
        captionDesc.textContent = `${desc}`;
      }
      displayResults(data);
    } 
    else {
        throw Error(await response.text());
    }
}
    catch(error) {
        console.log(error)
    }


}


apiFetch();

