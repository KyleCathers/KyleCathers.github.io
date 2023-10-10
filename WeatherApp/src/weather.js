// https://api.weatherapi.com/v1/current.json?key=d2a54b121f6748a786113745233009&q=london

// GIPHY: 2g10RmCdXHVvqH355KNluVTdiRtPu31Z
// weatherAPI: d2a54b121f6748a786113745233009
// https://api.weatherapi.com/v1/current.json
// https://developers.giphy.com/docs/api/endpoint/

import { format } from 'date-fns';

let weatherKey = 'd2a54b121f6748a786113745233009';

const getCurrentWeather = async (location) => {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${location}`);
    let dataObject = await response.json();
    
    let current = dataObject.current;
    let loc = dataObject.location;

    let temp_c = current.temp_c;
    let temp_f = current.temp_f;
    let feelslike_c = current.feelslike_c;
    let feelslike_f = current.feelslike_f;
    let humidity = current.humidity;
    let weather = current.condition.text;
    let icon = current.condition.icon;
    let wind = current.wind_kph;
    let UV = current.uv;

    
    let country = loc.country;
    let time = loc.localtime; // "2023-10-01 16:39"
    let city = loc.name;
    let region = loc.region; // province, state ...

    let parsedData = { temp_c, temp_f, feelslike_c, feelslike_f, humidity, weather, icon, 
        wind, UV, country, time, city, region };
    
    //console.log(parsedData);

    return parsedData;
}

// 7 day forecast
const getForecast = async location => {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${location}&days=8`);
    let data = await response.json();

    let forecast = data.forecast.forecastday;

    //console.log(forecast);

    let parsedForecast = [];

    forecast.forEach((forecastDay) => {
        // day of the week, date (month/day), high F/C, low F/C, weather icon
        let year = Number(forecastDay.date.slice(0, 4));    // e.g. 2023
        let month = Number(forecastDay.date.slice(5,7));    // e.g. 10
        let day = Number(forecastDay.date.slice(8, 10));    // e.g. 5

        let dayName = format(new Date(year, month - 1, day), 'EEEE');
        let monthName = format(new Date(year, month - 1, day), 'LLL');

        //console.log(dayName, monthName, day);

        let parsedDay = {
                            "date" : `${monthName} ${day}`,
                            "day" : dayName,
                            "high_c" : forecastDay.day.maxtemp_c,
                            "high_f" : forecastDay.day.maxtemp_f,
                            "low_c" : forecastDay.day.mintemp_c,
                            "low_f" : forecastDay.day.mintemp_f,
                            "icon" : forecastDay.day.condition.icon
                        }

        parsedForecast.push(parsedDay);
    })

    console.log(parsedForecast);

    return parsedForecast;
}


const getHourly = async (location) => {
    // get current hour
    let currentWeatherObj = await getCurrentWeather(location);
    let timeStamp = currentWeatherObj.time;
    let currentHour = Number(timeStamp.slice(11).split(':')[0]);

    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${location}&days=2`);
    let data = await response.json();

    let forecast = data.forecast.forecastday;

    let forecastArray = (forecast['0'].hour).concat(forecast['1'].hour);
    let allHourlyData = forecastArray.slice(currentHour + 1, currentHour + 13); // get next 12 hours


    // get hourly log of temperature, weather, and chance of rain
    let parsedHourly = [];

    allHourlyData.forEach((hour) => {
        let filteredHour = {
                            "hour" : hour.time,
                            "rain" : hour.chance_of_rain,
                            "weather" : hour.condition.text,
                            "icon" : hour.condition.icon,
                            "temp_c" : hour.temp_c,
                            "temp_f" : hour.temp_f
                           };
        parsedHourly.push(filteredHour);
    })

    return parsedHourly;
}

export { getCurrentWeather, getForecast, getHourly };