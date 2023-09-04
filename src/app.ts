import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.use(bodyParser.json());



app.use((error, req: Request, res: Response, next: NextFunction) => res.status(500).send(error.message));

export default app;
