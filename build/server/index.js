"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const router_1 = __importDefault(require("./routers/router"));
const path_1 = __importDefault(require("path"));
// import { Sequelize } from 'sequelize';
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// const URI = process.env.PG_URI || '';
// connect to db
// const sequelize = new Sequelize(URI); // Example for postgres
// middleware
app.use((0, connect_history_api_fallback_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
// app.use('/assets', express.static(path.join(__dirname, '../client/assets')));
app.use('/api', router_1.default);
// catch all route handler
app.use('*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client/index.html'));
});
// global error handler
app.use((err, _req, res, _next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign(Object.assign({}, defaultError), (err instanceof Error ? { message: { err: err.message } } : err));
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
// export default sequelize;
