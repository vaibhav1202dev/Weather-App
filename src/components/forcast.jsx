import "../styles/forcast.css";
import React, { useEffect, useState, useCallback } from "react";
import { getWeatherByQuery } from "../utils";
 //forcast
export const Forcast = (props) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const search = useCallback(async (query) => {
    try {
      const weather = await getWeatherByQuery(query);
      setWeather(weather);
      setQuery("");
    } catch (err) {
      console.log("error", err);
      setWeather({});
      setQuery("");
      setError({ message: "Not Found", query });
    }
  }, []);

  useEffect(() => {
    search("Pune");
  }, [search]);

  return (
    <div className="forecast">
      <img
        alt={weather.icon}
        className="temp-icon"
        src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
      />

      <div className="today-weather">
        <h3>{weather.main}</h3>
        <form
          onSubmit={(e) => e.preventDefault() || search(query)}
          className="search-box"
        >
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {weather.main ? (
            <>
              <li className="cityHead">
                <p>
                  {weather.city}, {weather.country}
                </p>
              </li>
              <li>
                <span>Temperature </span>
                <span className="temp">
                  {weather.temperatureC}°c ({weather.main})
                </span>
              </li>
              <li>
                Humidity{" "}
                <span className="temp">{Math.round(weather.humidity)}%</span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility)} mi
                </span>
              </li>
            </>
          ) : (
            <li>
              {" "}
              {error.query} {error.message}{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Forcast;
