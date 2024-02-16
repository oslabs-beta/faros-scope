import express, { Application, Request, Response, NextFunction } from "express";
import history from "connect-history-api-fallback";
import path from "path";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";
// import Router from "./routers/router";
// import { Sequelize } from 'sequelize';

import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 3000;
const METEOR_SVC =
  process.env.NODE_ENV !== "prod"
    ? "http://34.139.156.110"
    : "http://kubby-meteor.default.svc.cluster.local:80";

const PROM_SVC =
  process.env.NODE_ENV !== "prod"
    ? "http://35.227.104.153:31374"
    : "http://my-prom-prometheus-server.default.svc.cluster.local:80";

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    "/meteor-service",
    createProxyMiddleware({
        target: METEOR_SVC,
        changeOrigin: true,
        pathRewrite: {
            "^/meteor-service": "",
        },
    })
);

app.use(
    "/prom-service",
    createProxyMiddleware({
        target: PROM_SVC,
        changeOrigin: true,
        pathRewrite: {
            "^/prom-service": "",
        },
    })
);

app.use(history());
app.use(express.static(path.join(__dirname, "../client")));
app.use(express.static(path.join(__dirname, "../build")));
// app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// app.use("/api", Router);

// catch all route handler
app.use("*", (_req: Request, res: Response): void => {
    console.log('HIT HIT')
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// global error handler
app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    const defaultError = {
      log: "Express error handler caught unknown middleware error",
      status: 500,
      message: { err: "An error occurred" },
    };
    const errorObj = {
      ...defaultError,
      ...(err instanceof Error ? { message: { err: err.message } } : err),
    };
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

// export default sequelize;
