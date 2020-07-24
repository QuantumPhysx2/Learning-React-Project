import React, { useState } from 'react';
const api = {
    key: "5cceb36da4f7530937ddc6a1963aef8f",
    base: "https://api.openweather.map.org/data/2.5"
}

function App() {
    // Declaring multiple variables that will be used to transition between states in the app
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    // Declare 'search' var which listens for an event
    const search = evt => {
        // ...if event identifies the 'Enter' button on search-box...
        if (evt.key === "Enter") {
            // ...send a GET request
            // GET /api.openweather.map/org/data/2.5/weather?q={location}units=metricAPPID={API key}
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                // use a Promise to get the result in JSON format
                .then(res => res.json())
                // set variable 'result' to the fetched data from the Promise
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];         // Read from 0 and 6
        let date = d.getDate();             // Read from 0 and 30
        let month = months[d.getMonth()];   // Read from 0 and 11
        let year = d.getFullYear();         // Get full year
        // Return the day, date, month and year using string manipulation -> ${var}
        return `${day} ${date} ${month} ${year}`;
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? "app warm" : "app") : "app"}>
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
                </div>
                {/* React version of if-statement using a ternary (?) operator */}
                {(typeof weather.main != "undefined") ? (
                <div className="location-box">
                    <div className="location">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="date">
                        {dateBuilder(new Date())}
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°c
                        </div>
                        <div className="weather">
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>
                ) : ('')}
            </main>
        </div>
    );
}

export default App;