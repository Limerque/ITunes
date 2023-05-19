import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchResults from "./components/SearchResults";

test("renders search results with items", () => {
  const results = [
    {
      trackId: 1,
      artworkUrl100: "https://example.com/artwork.jpg",
      trackViewUrl: "https://example.com/track",
      trackName: "Track 1",
      artistViewUrl: "https://example.com/artist",
      artistName: "Artist 1",
      collectionViewUrl: "https://example.com/collection",
      collectionName: "Collection 1",
    },
    {
      trackId: 2,
      artworkUrl100: "https://example.com/artwork2.jpg",
      trackViewUrl: "https://example.com/track2",
      trackName: "Track 2",
      artistViewUrl: "https://example.com/artist2",
      artistName: "Artist 2",
      collectionViewUrl: "https://example.com/collection2",
      collectionName: "Collection 2",
    },
  ];

  const onAddToFavorites = jest.fn();

  render(
    <SearchResults results={results} onAddToFavorites={onAddToFavorites} />
  );

  // Check if the search results are rendered correctly
  const trackNameElements = screen.getAllByText(/Track \d/);
  expect(trackNameElements).toHaveLength(results.length);

  // Check if the "Add to Favorites" button works
  const addToFavoritesButton = screen.getAllByText("Add to Favorites")[0];
  fireEvent.click(addToFavoritesButton);
  expect(onAddToFavorites).toHaveBeenCalledWith(results[0]);
});
