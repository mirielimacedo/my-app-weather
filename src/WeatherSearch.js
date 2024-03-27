import React from "react";

export default function WeatherSearch(){
    return (
<div>
    <h1>Weather Application</h1>
    <div>
        <form>
            <input type="search" 
            placeholder="Enter a city.."
            ></input>
           <button type="Submit">Search</button>
        </form>
    </div>
</div>
    );
}