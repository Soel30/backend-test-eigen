import express from "express";
import ConnectDB from "./config/database";
import Routes from "./routes/routes";
import bodyParser from "body-parser";
const app = express().use(bodyParser.json());
const PORT = 3000;

app.use("/api/v1", Routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

ConnectDB();
