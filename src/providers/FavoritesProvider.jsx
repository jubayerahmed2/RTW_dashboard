import { FavoritesContext } from "../contexts";
import { useLocalStorage } from "../hooks";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const toggleFavorite = (location, latitude, longitude) => {
    /*
        -> check if location already exist in favorites 
        -> if exist remove the location object 
        -> if not exist add new one
    */

    const existingLocation = favorites.find((fav) => fav.location === location);

    if (existingLocation) {
      const nextLocation = favorites.filter((fav) => fav.location !== location);

      setFavorites(nextLocation);
    } else {
      setFavorites((prev) => [...prev, { location, latitude, longitude }]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesProvider;
