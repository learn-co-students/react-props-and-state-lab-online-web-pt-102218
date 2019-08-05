"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const pets_1 = require("./data/pets");
require("whatwg-fetch");
fetch_mock_1.default.get('/api/pets', pets_1.getAll());
fetch_mock_1.default.get('/api/pets?type=cat', pets_1.getByType('cat'));
fetch_mock_1.default.get('/api/pets?type=dog', pets_1.getByType('dog'));
fetch_mock_1.default.get('/api/pets?type=micropig', pets_1.getByType('micropig'));
exports.default = fetch_mock_1.default;
