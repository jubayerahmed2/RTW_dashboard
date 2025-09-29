import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: true,
    message: "",
  });

  const [error, setError] = useState("");

  const { selectedLocation } = useContext(LocationContext);

  const loadWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        state: true,
        message: "Fetching weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_OW_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      return response.json();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    let ignore = false;

    setLoading({
      state: true,
      message: "Finding location...",
    });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      loadWeatherData(
        selectedLocation.latitude,
        selectedLocation.longitude
      ).then((data) => {
        if (!ignore) {
          setWeatherData((prevWeatherData) => ({
            ...prevWeatherData,
            location: data?.name,
            climate: data?.weather[0]?.main,
            temperature: data?.main?.temp,
            maxTemperature: data?.main?.temp_max,
            minTemperature: data?.main?.temp_min,
            humidity: data?.main?.humidity,
            cloudPercentage: data?.clouds?.all,
            wind: data?.wind?.speed,
            time: data?.dt,
            longitude: data.coord.lon,
            latitude: data.coord.lat,
          }));
        }
        setLoading({ state: false, message: "" });
      });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        loadWeatherData(latitude, longitude).then((data) => {
          if (!ignore) {
            setWeatherData((prevWeatherData) => ({
              ...prevWeatherData,
              location: data?.name,
              climate: data?.weather[0]?.main,
              temperature: data?.main?.temp,
              maxTemperature: data?.main?.temp_max,
              minTemperature: data?.main?.temp_min,
              humidity: data?.main?.humidity,
              cloudPercentage: data?.clouds?.all,
              wind: data?.wind?.speed,
              time: data?.dt,
              longitude: data.coord.lon,
              latitude: data.coord.lat,
            }));
          }
          setLoading({ state: false, message: "" });
        });
      });
    }

    return () => {
      ignore = true;
    };
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return { weatherData, loading, error };
};
export default useWeather;
