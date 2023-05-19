import React from "react";

function FavoritesList({ favorites, onRemoveFromFavorites }) {
  return (
    <div>
      <h2>Favorites</h2>
      <ul className="favorites-list">
        {favorites.map((item) => (
          <li key={item.trackId} className="favorites-item">
            <div>
              <img
                src={item.artworkUrl100}
                alt="Artwork"
                className="result-image"
              />
              <div className="result-details">
                <h3>
                  <a
                    href={item.trackViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.trackName}
                  </a>
                </h3>
                <p>
                  <a
                    href={item.artistViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Artist: {item.artistName}
                  </a>
                </p>
                <p>
                  <a
                    href={item.collectionViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Collection: {item.collectionName}
                  </a>
                </p>
              </div>
            </div>
            <button onClick={() => onRemoveFromFavorites(item)}>
              Remove from Favorites
            </button>{" "}
            {/* Button to remove the item from favorites */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
