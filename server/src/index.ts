import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";

const app: Express = express();

app.use(express.json());
app.use(cors());
config();

app.use("/compiler", compilerRouter);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Welcome to web dev compiler server");
});

const port = process.env.PORT || 3000;

dbConnect();
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
