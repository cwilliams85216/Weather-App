import React from 'react';
import classes from './Conditions.module.css';

const Conditions = (props) => {

    return(
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city and country.</small>}
            {props.loading && <div className={classes.Loader}/>}
            {props.responseObj.cod === 200 ?
                
                <div className={classes.weatherResults}>
                    <p className={classes.cityName}>{props.responseObj.name}</p>
                    <p className={classes.Degrees}>{Math.round(props.responseObj.main.temp)}° </p>
                    <p className={classes.weatherDescription}> with {props.responseObj.weather[0].description}.</p>
                </div>
                : null
                }
            
        </div>
    )
}
export default Conditions;