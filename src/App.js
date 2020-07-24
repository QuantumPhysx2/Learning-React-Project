import React from 'react';
const owmAPI = {
    key: "5cceb36da4f7530937ddc6a1963aef8f",
    base: "https://api.openweather.map.org/data/2.5"
}

function App() {
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
        <div className="app">
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..." />
                </div>
                <div className="location-box">
                    <div className="location">
                        New Your City, US
                    </div>
                    <div className="date">
                        {dateBuilder(new Date())}
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            15°c
                        </div>
                        <div className="weather">
                            Sunny
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;