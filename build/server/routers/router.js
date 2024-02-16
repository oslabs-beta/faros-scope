"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const metricsController_1 = __importDefault(require("../controllers/metricsController"));
const Router = express_1.default.Router();
Router.get('/metrics', metricsController_1.default.getMetrics, (_req, res) => {
    var _a, _b;
    if (!((_a = res.locals) === null || _a === void 0 ? void 0 : _a.metrics))
        res.status(500).send({ message: 'No metrics found' });
    res.status(200).send((_b = res.locals) === null || _b === void 0 ? void 0 : _b.metrics);
});
exports.default = Router;
