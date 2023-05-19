const express = require("express");
const helmet = require("helmet");
const fetch = require("isomorphic-fetch");
const path = require("path");

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON data
app.use(helmet()); // Add security headers to the HTTP response

app.use(express.static(path.join(__dirname, "client/build")));

// API endpoints
app.get("/api/search", async (req, res) => {
  const { term, mediaType } = req.query;

  // Communicate with the iTunes Search API
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${term}&media=${mediaType}`
    );
    const data = await response.json(); // Parse the response data as JSON
    res.json(data.results); // Send the search results as JSON response
  } catch (error) {
    console.error("Error fetching data from iTunes API:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response if there's a problem with the API request
  }
});
// Serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
