import { format } from 'date-fns';
import { getCurrentWeather, getForecast, getHourly } from './weather';
import leftArrowIcon from './images/leftArrowIcon.png';
import rightArrowIcon from './images/rightArrowIcon.png';

let state = 'Today';
let tempState = 'C';
let currentLocation = 'Vancouver';

let currentWeatherObj = await getCurrentWeather(currentLocation);
let hourlyWeatherObj = await getHourly(currentLocation);
let forecastWeatherObj = await getForecast(currentLocation);

let pageInit = () => {

    // main container
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    // top: title, location, time, degree setting
    const topSection = document.createElement('div');
    topSection.setAttribute('id', 'top-section');

    const leftSection = document.createElement('div');
    leftSection.setAttribute('id', 'left-section');

    const citySection = document.createElement('div');
    citySection.setAttribute('id', 'city-section');

    const regionSection = document.createElement('div');
    regionSection.setAttribute('id', 'region-section');

    const countrySection = document.createElement('div');
    countrySection.setAttribute('id', 'country-section');

    leftSection.appendChild(citySection);
    leftSection.appendChild(regionSection);
    leftSection.appendChild(countrySection);

    const rightSection = document.createElement('div');
    rightSection.setAttribute('id', 'right-section');

    const dateSection = document.createElement('div');
    dateSection.setAttribute('id', 'date-section');

    const timeSection = document.createElement('div');
    timeSection.setAttribute('id', 'time-section');

    const degreeSection = document.createElement('div');
    degreeSection.setAttribute('id', 'degree-section');

    const degreeText = document.createElement('div');
    degreeText.setAttribute('id', 'degree-text');
    degreeText.innerText = '°C/°F'

    const degreeButton = document.createElement('label');
    degreeButton.setAttribute('id', 'degree-button');
    degreeButton.setAttribute('class', 'switch');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    const slider = document.createElement('span');
    slider.setAttribute('class', 'slider round');

    degreeButton.appendChild(checkBox);
    degreeButton.appendChild(slider);

    degreeSection.appendChild(degreeText);
    degreeSection.appendChild(degreeButton);

    const refreshSection = document.createElement('div');
    refreshSection.setAttribute('id', 'refresh-section');

    rightSection.appendChild(dateSection);
    rightSection.appendChild(timeSection);
    rightSection.appendChild(degreeSection);
    rightSection.appendChild(refreshSection);

    topSection.appendChild(leftSection);
    topSection.appendChild(rightSection);

    const middleSection = document.createElement('div');
    middleSection.setAttribute('id', 'middle-section');

    middleSection.appendChild(todayContent()); // default to todays content

    // Time selection, search bar
    const bottomSection = document.createElement('div');
    bottomSection.setAttribute('id', 'bottom-section');

    const selectSection = document.createElement('div');
    selectSection.setAttribute('id', 'select-section');

    const todaySelect = document.createElement('div');
    todaySelect.setAttribute('id', 'today');
    todaySelect.setAttribute('class', 'select');
    todaySelect.innerText = 'Today';

    const hourlySelect = document.createElement('div');
    hourlySelect.setAttribute('id', 'hourly');
    hourlySelect.setAttribute('class', 'select');
    hourlySelect.innerText = 'Hourly';

    const forecastSelect = document.createElement('div');
    forecastSelect.setAttribute('id', 'forecast');
    forecastSelect.setAttribute('class', 'select');
    forecastSelect.innerText = 'Forecast';

    selectSection.appendChild(todaySelect);
    selectSection.appendChild(hourlySelect);
    selectSection.appendChild(forecastSelect);

    const searchBar = document.createElement('form');
    searchBar.setAttribute('id', 'search-bar');

    const searchInput = document.createElement('input');
    searchInput.setAttribute('placeholder', 'Search...');
    searchInput.setAttribute('id', 'search-input');

    const searchButton = document.createElement('button');
    searchButton.setAttribute('type', 'search');
    searchButton.setAttribute('id', 'search-button');

    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchButton);

    bottomSection.appendChild(selectSection);
    bottomSection.appendChild(searchBar);

    container.appendChild(topSection);
    container.appendChild(middleSection);
    container.appendChild(bottomSection);

    todaySelect.addEventListener('click', () => {
        state = 'Today';
        middleSection.innerHTML = ""; // kill all children
        middleSection.appendChild(todayContent());
        setTodayData();
    });

    hourlySelect.addEventListener('click', () => {
        state = 'Hourly';
        middleSection.innerHTML = ""; // kill all children
        middleSection.appendChild(hourlyContent());
        setHourlyData();
    });

    forecastSelect.addEventListener('click', () => {
        state = 'Forecast';
        middleSection.innerHTML = ""; // kill all children
        middleSection.appendChild(forecastContent());
        setForecastData();
    });

    refreshSection.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            currentWeatherObj = await getCurrentWeather(currentLocation);
            hourlyWeatherObj = await getHourly(currentLocation);
            forecastWeatherObj = await getForecast(currentLocation);
        } catch (error) {
            alert(`Invalid location`);
            searchInput.value = "";
            return;
        }

        setData();
    });

    checkBox.addEventListener('click', () => {
        if(checkBox.checked) {
            tempState = 'F';
        } else {
            tempState = 'C';
        }

        if (state === 'Today') {
            setTodayData();
        } else if (state === 'Hourly') {
            setHourlyData();
        } else {
            setForecastData();
        }

    })

    searchBar.addEventListener('submit', async (e) => {
        e.preventDefault();
        if(searchInput.value.trim() !== "") { // pause on empty inputs
            currentLocation = searchInput.value;

            try {
                currentWeatherObj = await getCurrentWeather(currentLocation);
                hourlyWeatherObj = await getHourly(currentLocation);
                forecastWeatherObj = await getForecast(currentLocation);
            } catch (error) {
                alert(`Invalid location`);
                searchInput.value = "";
                return;
            }

            setData();

            searchInput.value = "";
        }
    })

    return container;
}

// generate DOM elements for today tab
let todayContent = () => {
    const middleContainer = document.createElement('div');
    middleContainer.setAttribute('id', 'middle-container-today');

    const title = document.createElement('div');
    title.innerText = 'Today';
    title.setAttribute('id', 'title');

    const weatherText = document.createElement('div');
    weatherText.setAttribute('id', 'weather-text');

    const weatherLogo = new Image();
    weatherLogo.setAttribute('id', 'weather-logo');

    const currentTemp = document.createElement('div');
    currentTemp.setAttribute('id', 'current-temp');

    const feelsLike = document.createElement('div');
    feelsLike.setAttribute('id', 'feels-like');

    const humidity = document.createElement('div');
    humidity.setAttribute('id', 'humidity');

    const wind = document.createElement('div');
    wind.setAttribute('id', 'wind');

    const UV = document.createElement('div');
    UV.setAttribute('id', 'UV');

    middleContainer.appendChild(title);
    middleContainer.appendChild(weatherText);
    middleContainer.appendChild(weatherLogo);
    middleContainer.appendChild(currentTemp);
    middleContainer.appendChild(feelsLike);
    middleContainer.appendChild(humidity);
    middleContainer.appendChild(wind);
    middleContainer.appendChild(UV);

    return middleContainer;
}

// generate DOM elements for hourly tab
let hourlyContent = () => {
    const middleContainer = document.createElement('div');
    middleContainer.setAttribute('id', 'middle-container-hourly');

    const title = document.createElement('div');
    title.innerText = 'Hourly';
    title.setAttribute('id', 'title');

    const hourlyContentWrapper = document.createElement('div');
    hourlyContentWrapper.setAttribute('id', 'hourly-content-wrapper');

    const leftArrowHourly = new Image();
    leftArrowHourly.src = leftArrowIcon;
    leftArrowHourly.setAttribute('id', 'left-arrow-hourly');
    leftArrowHourly.addEventListener('click', leftHourly);

    const hourlyContent = document.createElement('div');
    hourlyContent.setAttribute('id', 'hourly-content');


    let weatherWrapper = [];
    let weatherHour = [];
    let weatherTemp = [];
    let weatherIcon = [];
    let weatherRain = [];

    for(let i = 0; i < 12; i++) {
        weatherWrapper[i] = document.createElement('div');
        weatherWrapper[i].setAttribute('class', 'weather-wrapper');
        weatherWrapper[i].setAttribute('id', `weather-wrapper-${i}`);

        weatherHour[i] = document.createElement('div');
        weatherHour[i].setAttribute('class', 'weather-hour');
        weatherHour[i].setAttribute('id', `weather-hour-${i}`);

        weatherTemp[i] = document.createElement('div');
        weatherTemp[i].setAttribute('class', 'weather-temp');
        weatherTemp[i].setAttribute('id', `weather-temp-${i}`);

        weatherIcon[i] = new Image();
        weatherIcon[i].setAttribute('class', 'weather-icon');
        weatherIcon[i].setAttribute('id', `weather-icon-${i}`);

        weatherRain[i] = document.createElement('div');
        weatherRain[i].setAttribute('class', 'weather-rain');
        weatherRain[i].setAttribute('id', `weather-rain-${i}`);

        weatherWrapper[i].appendChild(weatherHour[i]);
        weatherWrapper[i].appendChild(weatherTemp[i]);
        weatherWrapper[i].appendChild(weatherIcon[i]);
        weatherWrapper[i].appendChild(weatherRain[i]);

        hourlyContent.appendChild(weatherWrapper[i]);
    }

    const rightArrowHourly = new Image();
    rightArrowHourly.src = rightArrowIcon;
    rightArrowHourly.setAttribute('id', 'right-arrow-hourly');
    rightArrowHourly.addEventListener('click', rightHourly);

    hourlyContentWrapper.appendChild(leftArrowHourly);
    hourlyContentWrapper.appendChild(hourlyContent);
    hourlyContentWrapper.appendChild(rightArrowHourly);

    middleContainer.appendChild(title);
    middleContainer.appendChild(hourlyContentWrapper);

    return middleContainer;
}

// generate DOM elements for forecast tab
let forecastContent = () => {
    const middleContainer = document.createElement('div');
    middleContainer.setAttribute('id', 'middle-container-forecast');

    const title = document.createElement('div');
    title.innerText = 'Forecast';
    title.setAttribute('id', 'title');

    const forecastContentWrapper = document.createElement('div');
    forecastContentWrapper.setAttribute('id', 'forecast-content-wrapper');

    const leftArrowForecast = new Image();
    leftArrowForecast.src = leftArrowIcon;
    leftArrowForecast.setAttribute('id', 'left-arrow-forecast');
    leftArrowForecast.addEventListener('click', leftForecast);

    const forecastContent = document.createElement('div');
    forecastContent.setAttribute('id', 'forecast-content');

    let weatherWrapper = [];
    let weatherDay = [];
    let weatherDate = [];
    let weatherHigh = [];
    let weatherLow = [];
    let weatherIcon = [];

    for(let i = 0; i < 8; i++) {
        weatherWrapper[i] = document.createElement('div');
        weatherWrapper[i].setAttribute('class', 'weather-wrapper-forecast');
        weatherWrapper[i].setAttribute('id', `weather-wrapper-forecast-${i}`);

        weatherDay[i] = document.createElement('div');
        weatherDay[i].setAttribute('class', 'weather-day');
        weatherDay[i].setAttribute('id', `weather-day-${i}`);

        weatherDate[i] = document.createElement('div');
        weatherDate[i].setAttribute('class', 'weather-date');
        weatherDate[i].setAttribute('id', `weather-date-${i}`);

        weatherHigh[i] = document.createElement('div');
        weatherHigh[i].setAttribute('class', 'weather-high');
        weatherHigh[i].setAttribute('id', `weather-high-${i}`);

        weatherLow[i] = document.createElement('div');
        weatherLow[i].setAttribute('class', 'weather-low');
        weatherLow[i].setAttribute('id', `weather-low-${i}`);

        weatherIcon[i] = new Image();
        weatherIcon[i].setAttribute('class', 'weather-icon');
        weatherIcon[i].setAttribute('id', `weather-icon-${i}`);

        weatherWrapper[i].appendChild(weatherDay[i]);
        weatherWrapper[i].appendChild(weatherDate[i]);
        weatherWrapper[i].appendChild(weatherHigh[i]);
        weatherWrapper[i].appendChild(weatherLow[i]);
        weatherWrapper[i].appendChild(weatherIcon[i]);

        forecastContent.appendChild(weatherWrapper[i]);
    }

    const rightArrowForecast = new Image();
    rightArrowForecast.src = rightArrowIcon;
    rightArrowForecast.setAttribute('id', 'right-arrow-forecast');
    rightArrowForecast.addEventListener('click', rightForecast);

    forecastContentWrapper.appendChild(leftArrowForecast);
    forecastContentWrapper.appendChild(forecastContent);
    forecastContentWrapper.appendChild(rightArrowForecast);

    middleContainer.appendChild(title);
    middleContainer.appendChild(forecastContentWrapper);

    return middleContainer;
}

// append weather data to today tab
let setTodayData = () => {
    const weatherText = document.querySelector('#weather-text');
    const weatherLogo = document.querySelector('#weather-logo');
    const currentTemp = document.querySelector('#current-temp');
    const feelsLike = document.querySelector('#feels-like');
    const humidity = document.querySelector('#humidity');
    const wind = document.querySelector('#wind');
    const UV = document.querySelector('#UV');

    weatherText.innerText = currentWeatherObj.weather;
    weatherLogo.src = currentWeatherObj.icon;
    humidity.innerText = `${currentWeatherObj.humidity}% Humidity`;
    wind.innerText = `Wind Speed: ${currentWeatherObj.wind} km/h`;
    UV.innerText = `UV: ${currentWeatherObj.UV}`;

    if(tempState === 'C') {
        currentTemp.innerText = `Temp: ${currentWeatherObj.temp_c}°C`;
        feelsLike.innerText = `Feels Like: ${currentWeatherObj.feelslike_c}°C`;
    } else {
        currentTemp.innerText = `Temp: ${currentWeatherObj.temp_f}°F`;
        feelsLike.innerText = `Feels Like: ${currentWeatherObj.feelslike_f}°F`;
    }

}

// append weather data to hourly tab
let setHourlyData = () => {

    // data from hourlyWeatherObj global

    let weatherHour = [];
    let weatherTemp = [];
    let weatherIcon = [];
    let weatherRain = [];

    for (let i = 0; i < 12; i++) {
        weatherHour[i] = document.querySelector(`#weather-hour-${i}`);
        weatherTemp[i] = document.querySelector(`#weather-temp-${i}`);
        weatherIcon[i] = document.querySelector(`#weather-icon-${i}`);
        weatherRain[i] = document.querySelector(`#weather-rain-${i}`);

        // add hour data
        let timestamp = hourlyWeatherObj[i].hour.split(" ")[1];
        let hour = Number(timestamp.split(":")[0]);

        if(hour == 0) {                 // midnight
            timestamp = `${hour + 12}:${timestamp.split(":")[1]}AM`;
        } else if(hour < 12) {          // morning
            timestamp += 'AM';
        } else if (hour === 12) {       // noon
            timestamp += 'PM';
        } else {                        // evening
            timestamp = `${hour - 12}:${timestamp.split(":")[1]}PM`;
        }

        weatherHour[i].innerText = timestamp;

        // add temperature data
        if(tempState === 'C') {
            weatherTemp[i].innerText = `${hourlyWeatherObj[i].temp_c}°C`;
        } else {
            weatherTemp[i].innerText = `${hourlyWeatherObj[i].temp_f}°F`;
        }

        // add icons
        weatherIcon[i].src = hourlyWeatherObj[i].icon;
        // add rain chance
        weatherRain[i].innerText = `Rain: ${hourlyWeatherObj[i].rain}%`
    }
}

// append weather data to forecast tab
let setForecastData = () => {
    let weatherDay = [];
    let weatherDate = [];
    let weatherHigh = [];
    let weatherLow = [];
    let weatherIcon = [];

    for (let i = 0; i < 8; i++) {
        //forecastWeatherObj
        weatherDay[i] = document.querySelector(`#weather-day-${i}`);
        weatherDate[i] = document.querySelector(`#weather-date-${i}`);
        weatherHigh[i] = document.querySelector(`#weather-high-${i}`);
        weatherLow[i] = document.querySelector(`#weather-low-${i}`);
        weatherIcon[i] = document.querySelector(`#weather-icon-${i}`);

        weatherDay[i].innerText = forecastWeatherObj[i].day;
        weatherDate[i].innerText = forecastWeatherObj[i].date;

        if(tempState === 'C') {
            weatherHigh[i].innerText = `High: ${forecastWeatherObj[i].high_c}°C`;
            weatherLow[i].innerText = `Low: ${forecastWeatherObj[i].low_c}°C`;
        } else {
            weatherHigh[i].innerText = `High: ${forecastWeatherObj[i].high_f}°F`;
            weatherLow[i].innerText = `Low: ${forecastWeatherObj[i].low_f}°F`;
        }

        weatherIcon[i].src = forecastWeatherObj[i].icon;
        
    }
}

// append location data to header
let setLocationData = () => {
    const citySection = document.querySelector('#city-section');
    const regionSection = document.querySelector('#region-section');
    const countrySection = document.querySelector('#country-section');

    citySection.innerText = currentWeatherObj.city;
    regionSection.innerText = currentWeatherObj.region;

    if(currentWeatherObj.country === "United States of America") {
        countrySection.innerText = "USA";
    } else {
        countrySection.innerText = currentWeatherObj.country;
    }
}

// append time data to header
let setTimeData = () => {
    const dateSection = document.querySelector('#date-section');
    const timeSection = document.querySelector('#time-section');

    let timeStamp = currentWeatherObj.time;      // e.g. 2023-10-05 11:31

    let year = Number(timeStamp.slice(0, 4));    // e.g. 2023
    let month = Number(timeStamp.slice(5,7));    // e.g. 10
    let day = Number(timeStamp.slice(8, 10));    // e.g. 5

    let dayName = format(new Date(year, month - 1, day), 'EEEE');
    let monthName = format(new Date(year, month - 1, day), 'LLL');

    let time = timeStamp.slice(11);
    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    let AMPM = (hour < 12) ? 'AM' : 'PM';
    
    if(hour > 12) hour -= 12;

    dateSection.innerText = `${dayName}, ${monthName} ${day}`;
    timeSection.innerText = `${hour}:${minute}${AMPM}`;
}

// appends lcoation, time, and today/hourly/forecast tab data
let setData = () => {
    setLocationData();
    setTimeData();

    if (state === 'Today') {
        setTodayData();
    } else if (state === 'Hourly') {
        setHourlyData();
    } else {
        setForecastData();
    }
}

let leftHourly = () => {
    let root = document.querySelector(':root');
    let index = getComputedStyle(root).getPropertyValue('--hour-index');

    let newIndex;

    if(index > 0) {
        newIndex = Number(index) - 1;
    } else {
        newIndex = Number(index);
    }

    root.style.setProperty('--hour-index', newIndex);
}

let leftForecast = () => {
    let root = document.querySelector(':root');
    let index = getComputedStyle(root).getPropertyValue('--forecast-index');

    let newIndex;

    if(index > 0) {
        newIndex = Number(index) - 1;
    } else {
        newIndex = Number(index);
    }

    root.style.setProperty('--forecast-index', newIndex);
}

let rightHourly = (type) => {
    let root = document.querySelector(':root');
    let index = getComputedStyle(root).getPropertyValue('--hour-index');

    let newIndex;

    if(index <= 9) {
        newIndex = Number(index) + 1;
    } else {
        newIndex = Number(index);
    }

    root.style.setProperty('--hour-index', newIndex);
}

let rightForecast = (type) => {
    let root = document.querySelector(':root');
    let index = getComputedStyle(root).getPropertyValue('--forecast-index');

    let newIndex;

    if(index < 6) {
        newIndex = Number(index) + 1;
    } else {
        newIndex = Number(index);
    }

    root.style.setProperty('--forecast-index', newIndex);
}


export { pageInit, setData };