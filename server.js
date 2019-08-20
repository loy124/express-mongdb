import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "./core/logger/app-logger";
import morgan from "morgan";
import config from "./core/config/config.dev";
import cars from "./routes/cars.route";
import todos from "./routes/todos.route";
import users from "./routes/users.route";
import purifiers from "./routes/purifiers.route";
import connectToDb from "./db/connect";

const port = config.serverPort;
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev", { stream: logger.stream }));

app.use("/users", users);
app.use("/cars", cars);
app.use("/purifiers", purifiers);
app.use("/todos", todos);

//Index route
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  logger.info("server started - ", port);
});
