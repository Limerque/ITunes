const request = require("supertest");
const app = require("../index");

// Mock the server start to prevent it from running during testing
app.listen = jest.fn();

test("should return search results", async () => {
  const response = await request(app)
    .get("/api/search")
    .query({ term: "melanie", mediaType: "music" });

  expect(response.status).toBe(200);
  expect(response.body).toBeDefined();
});
