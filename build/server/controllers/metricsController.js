"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const metricsController = {
    getMetrics(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fetch('http://localhost:9090/api/v1/query?query=kube_node_info');
                const json = yield data.json();
                res.locals.metrics = json;
                return next();
            }
            catch (error) {
                return next({
                    log: 'Problem in MetricsController.getMetrics',
                    status: 500,
                    message: { err: 'Unknown Error Occurred' }
                });
            }
        });
    },
};
exports.default = metricsController;
