"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMetricsMap = void 0;
const formatMetricsMap = (data) => {
    var _a, _b, _c;
    const cache = {};
    // console.log('inside Metrics', data)
    for (const item in data.metricsMap) {
        const dataObj = Object.assign(Object.assign({}, data.metricsMap[item]), { name: item });
        if (!cache[data.metricsMap[item].type]) {
            cache[data.metricsMap[item].type] = [dataObj];
        }
        else {
            cache[data.metricsMap[item].type].push(dataObj);
        }
    }
    cache.pod = (_a = cache === null || cache === void 0 ? void 0 : cache.pod) === null || _a === void 0 ? void 0 : _a.map((elm, i) => {
        return Object.assign(Object.assign({}, elm), { id: i });
    });
    cache.node = (_b = cache === null || cache === void 0 ? void 0 : cache.node) === null || _b === void 0 ? void 0 : _b.map((elm, i) => {
        return Object.assign(Object.assign({}, elm), { id: i });
    });
    cache.container = (_c = cache === null || cache === void 0 ? void 0 : cache.container) === null || _c === void 0 ? void 0 : _c.map((elm, i) => {
        return Object.assign(Object.assign({}, elm), { id: i });
    });
    return cache;
};
exports.formatMetricsMap = formatMetricsMap;
