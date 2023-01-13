import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import bodyParser from "body-parser";

import cors from "cors";

import userRouter from "./routes/UserRouter";

const app = express();

app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use("/api", cors(corsOptions), userRouter);

app.use(
  (
    err: ErrorRequestHandler,
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(err); //replace with logger later
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.json({ error: err });
  }
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "app is running!" });
});

app.listen(80);
console.log(`Server is Startig at http://localhost:80`);
