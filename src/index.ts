import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { sequelize } from "./models";
import router from "./routes";

const app: Express = express();
const port = process.env.NODE_ENV === "development" ? 3001 : process.env.PORT;

app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: `Welcome to the inote API! \n`,
  });
});

app.get("/sync", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    res.send("database sync completed");
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
  }
});

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`);
});
