function FavoriteLocationDropdown({ onShow }) {
  return (
    <div
      onClick={onShow}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <span>Favorite Locations</span>
    </div>
  );
}
export default FavoriteLocationDropdown;
