"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMetricsMap = void 0;
const formatMetricsMap = (data) => {
    const cache = {};
    for (const item in data.metricsMap) {
        const dataObj = Object.assign(Object.assign({}, data.metricsMap[item]), { name: item });
        if (!cache[data.metricsMap[item].type]) {
            cache[data.metricsMap[item].type] = [dataObj];
        }
        else {
            cache[data.metricsMap[item].type].push(dataObj);
        }
    }
    return cache;
};
exports.formatMetricsMap = formatMetricsMap;
