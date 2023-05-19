import React from "react";
import FavoritesList from "./Favorites";

function FavoritesPage({ favorites, onRemoveFromFavorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <FavoritesList
        favorites={favorites} // Pass the favorites array as a prop to the FavoritesList component
        onRemoveFromFavorites={onRemoveFromFavorites} // Pass the onRemoveFromFavorites function as a prop to the FavoritesList component
      />
    </div>
  );
}

export default FavoritesPage;
