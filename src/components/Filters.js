"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Filters extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.handleTypeChange = e => this.props.onChangeType(e.target.value);
        this.handleFindPetsClick = () => this.props.onFindPetsClick();
    }
    render() {
        return (react_1.default.createElement("div", { className: "ui form" },
            react_1.default.createElement("h3", null, "Animal type"),
            react_1.default.createElement("div", { className: "field" },
                react_1.default.createElement("select", { name: "type", id: "type", onChange: this.handleTypeChange },
                    react_1.default.createElement("option", { value: "all" }, "All"),
                    react_1.default.createElement("option", { value: "cat" }, "Cats"),
                    react_1.default.createElement("option", { value: "dog" }, "Dogs"),
                    react_1.default.createElement("option", { value: "micropig" }, "Micropigs"))),
            react_1.default.createElement("div", { className: "field" },
                react_1.default.createElement("button", { className: "ui secondary button", onClick: this.handleFindPetsClick }, "Find pets"))));
    }
}
exports.default = Filters;
