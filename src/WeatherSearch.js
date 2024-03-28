import React, { useState } from "react";

export default function WeatherSearch({ onCityChange }) {
  const [inputCity, setInputCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onCityChange(inputCity); // Isso deveria atualizar o estado `city` no componente `App`
  }

  function handleChange(event) {
    setInputCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={handleChange}
        value={inputCity}
        placeholder="Type a city"
      />
      <input type="submit" value="Search" className="button" />
    </form>
  );
}
