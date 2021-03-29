import express from "express";
import path from "path";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.json({ reply: "GET pong!" });
});

app.post("/api/ping", (request, response) => {
  console.log("❇️ Received POST request to /api/ping");
  response.json({ reply: "POST pong!" });
});

export { app };
