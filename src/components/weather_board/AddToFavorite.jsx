import { useContext } from "react";
import { SVGIcons } from "../../assets";
import { FavoritesContext, WeatherContext } from "../../contexts";

function AddToFavorite() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { weatherData } = useContext(WeatherContext);

  const isFavorite = favorites.find(
    (fav) => fav.location === weatherData.location
  );

  const handleFavorite = () => {
    toggleFavorite(
      weatherData.location,
      weatherData.latitude,
      weatherData.longitude
    );
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favorite</span>
          {isFavorite ? (
            <img src={SVGIcons.heartRedIcon} />
          ) : (
            <img src={SVGIcons.heartOutlineIcon} />
          )}
        </button>
      </div>
    </div>
  );
}
export default AddToFavorite;
