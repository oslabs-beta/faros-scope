"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexBetween = void 0;
const material_1 = require("@mui/material");
const system_1 = require("@mui/system");
exports.FlexBetween = (0, system_1.styled)(material_1.Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});
