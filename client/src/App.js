import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import FavoritesPage from "./components/FavoritesPage";
import "./App.css";

function App() {
  const [term, setTerm] = useState(""); // State to store the search term
  const [mediaType, setMediaType] = useState("all"); // State to store the selected media type
  const [searchResults, setSearchResults] = useState([]); // State to store the search results
  const [favorites, setFavorites] = useState([]); // State to store the favorite items

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/search?term=${term}&mediaType=${mediaType}`
      );
      const data = await response.json();
      setSearchResults(data); // Update the search results state with the fetched data
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleAddToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
    alert("Item added to favorites"); // Add an item to the favorites state
  };

  const handleRemoveFromFavorites = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.trackId !== item.trackId)
    );
    alert("Item removed from favorites"); // Remove an item from the favorites state based on its trackId
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Search</Link> {/* Link to the search page */}
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>{" "}
              {/* Link to the favorites page */}
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div>
              <h1>iTunes Search</h1>
              <SearchForm
                term={term}
                mediaType={mediaType}
                onSearch={handleSearch}
                onTermChange={setTerm}
                onMediaTypeChange={setMediaType}
              />

              <SearchResults
                results={searchResults}
                onAddToFavorites={handleAddToFavorites}
              />
            </div>
          </Route>
          <Route path="/favorites">
            <FavoritesPage
              favorites={favorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
