import React from "react";

function SearchResults({ results, onAddToFavorites }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul className="search-results-list">
        {results.map((item) => (
          <li key={item.trackId} className="search-result-item">
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
            <button onClick={() => onAddToFavorites(item)}>
              Add to Favorites
            </button>{" "}
            {/* Button to add the item to favorites */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
