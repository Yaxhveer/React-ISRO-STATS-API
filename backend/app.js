import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from "body-parser";
import LaunchRouter from "./routes/launchRoutes.js";
const app = express();


// middlewares
app.use(helmet());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routing
app.use("/api", LaunchRouter);

export default app;