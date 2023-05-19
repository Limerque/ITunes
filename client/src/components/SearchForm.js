import React from "react";

function SearchForm({
  term,
  mediaType,
  onSearch,
  onTermChange,
  onMediaTypeChange,
}) {
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search term"
        value={term}
        onChange={(e) => onTermChange(e.target.value)}
      />
      <select
        value={mediaType}
        onChange={(e) => onMediaTypeChange(e.target.value)}
      >
        <option value="all">All</option>{" "}
        {/* Option for searching all media types */}
        <option value="movie">Movie</option> {/* Option for searching movies */}
        <option value="podcast">Podcast</option>{" "}
        {/* Option for searching podcasts */}
        <option value="music">Music</option> {/* Option for searching music */}
        <option value="audiobook">Audiobook</option>{" "}
        {/* Option for searching audiobooks */}
        <option value="shortFilm">Short Film</option>{" "}
        {/* Option for searching short films */}
        <option value="tvShow">TV Show</option>{" "}
        {/* Option for searching TV shows */}
        <option value="software">Software</option>{" "}
        {/* Option for searching software */}
        <option value="ebook">eBook</option> {/* Option for searching eBooks */}
      </select>
      <button type="submit">Search</button>{" "}
      {/* Submit button for initiating the search */}
    </form>
  );
}

export default SearchForm;
