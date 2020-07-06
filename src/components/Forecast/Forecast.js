
import React, {useState} from 'react';
import Conditions from '../Conditions/conditions';
import classes from './Forecast.module.css';


const Forecast = () => {

    let [location, setLocation] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedLocation = encodeURIComponent(location);


    let [responseObj, setResponseObj ] = useState({});

    function getForecast(e){

        e.preventDefault();

        if (location.length === 0) {
            return setError(true);
        }

        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
        
        setLoading(true);
        
       
    

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedLocation}`, {
	            "method": "GET",
	            "headers": {
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		    "x-rapidapi-key": process.env.REACT_APP_API_KEY
	                        }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObj(response);
            setLoading(false);
        })
        
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });


    }
 

    return (
        <div className={classes.main}>
            
                <h2>Find Current Weather Conditions</h2>
                <form onSubmit={getForecast}>
                        <input
                            className={classes.textInput}
                            type="text"
                            placeholder="Enter City,Country"
                            maxLength="50"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            />
                        <label className={classes.Radio}>
                            <input
                                type="radio"
                                name="units"
                                checked={unit === "imperial"}
                                value="imperial"
                                onChange={(e) => setUnit(e.target.value)}
                                />
                            Fahrenheit
                        </label>
                        <label className={classes.Radio}>
                            <input
                                type="radio"
                                name="units"
                                checked={unit === "metric"}
                                value="metric"
                                onChange={(e) => setUnit(e.target.value)}
                                />
                            Celcius
                        </label>
                        <button className={classes.Button} type="submit">Get Forecast</button>
                    </form>
                <Conditions
                    responseObj={responseObj}
                    error={error} 
                    loading={loading} 
                    />
            
       </div>
    )
}

export default Forecast;