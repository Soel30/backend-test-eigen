import express from "express";
import ConnectDB from "./config/database";
import Routes from "./routes/routes";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import { Swagger } from "./config/swagger";

const app = express().use(bodyParser.json());
const PORT = 3000;

app.use("/api/v1", Routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(Swagger.swaggerDocument, undefined, undefined, Swagger.customCss)
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

ConnectDB();
