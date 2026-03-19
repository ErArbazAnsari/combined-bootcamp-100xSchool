import express, { type Request, type Response } from "express";

const app = express();

const name = "arbaz";

app.get("/", (req: Request, res: Response) => {
  res.send(`hi ${name} from server!`);
});

app.listen(5000, () => console.log("server is up and running on port=5000"));
