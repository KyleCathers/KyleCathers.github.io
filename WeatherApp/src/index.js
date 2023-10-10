import './style.css';

import { pageInit, setData } from './container';
import { getForecast, getHourly } from './weather';

//getCurrentWeather();
//getForecast();

document.body.appendChild(pageInit());
setData();

//getForecast('Vancouver');
//document.body.appendChild(pageInit());