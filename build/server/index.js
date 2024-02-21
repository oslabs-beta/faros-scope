"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
// import Router from "./routers/router";
// import { Sequelize } from 'sequelize';
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const METEOR_SVC = process.env.NODE_ENV !== 'prod'
    ? 'http://34.139.156.110'
    : 'http://kubby-meteor.default.svc.cluster.local:80';
const PROM_SVC = process.env.NODE_ENV !== 'prod'
    ? 'http://35.227.104.153:31374'
    : 'http://my-prom-prometheus-server.default.svc.cluster.local:80';
// middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/meteor-service', (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: METEOR_SVC,
    changeOrigin: true,
    pathRewrite: {
        '^/meteor-service': '',
    },
}));
app.use('/prom-service', (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: PROM_SVC,
    changeOrigin: true,
    pathRewrite: {
        '^/prom-service': '',
    },
}));
app.use((0, connect_history_api_fallback_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../build')));
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../client/assets')));
// app.use("/api", Router);
// catch all route handler
app.use('*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client/index.html'));
});
// global error handler
app.use((err, _req, res, _next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(Object.assign({}, defaultError), (err instanceof Error ? { message: { err: err.message } } : err));
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
// export default sequelize;
