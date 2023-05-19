const request = require("supertest");
const app = require("../index");

app.listen = jest.fn();

test("returns results", async () => {
  const response = await request(app).get("/api/search");
  expect(response.body).toMatchSnapshot();
});
