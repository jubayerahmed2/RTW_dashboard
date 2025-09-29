import { createContext } from "react";

export const WeatherContext = createContext({
  weatherData: {},
  loading: { state: true, message: "" },
  error: "",
});
export const FavoritesContext = createContext([]);
export const LocationContext = createContext({});
