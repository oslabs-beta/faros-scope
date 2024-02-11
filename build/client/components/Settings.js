"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemedContainer_1 = __importDefault(require("./reusable/ThemedContainer"));
const Settings = () => {
    return (react_1.default.createElement(ThemedContainer_1.default, null,
        react_1.default.createElement("h1", null, "Settings")));
};
exports.default = Settings;
