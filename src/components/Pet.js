"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Pet extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "card" },
            react_1.default.createElement("div", { className: "content" },
                react_1.default.createElement("a", { className: "header" },
                    this.props.pet.gender === "female" ? '♀' :
                        this.props.pet.gender === "male" ? '♂' :
                            this.props.pet.gender,
                    this.props.pet.name),
                react_1.default.createElement("div", { className: "meta" },
                    react_1.default.createElement("span", { className: "date" }, this.props.pet.type)),
                react_1.default.createElement("div", { className: "description" },
                    react_1.default.createElement("p", null,
                        "Age: ",
                        this.props.pet.age),
                    react_1.default.createElement("p", null,
                        "Weight: ",
                        this.props.pet.weight))),
            react_1.default.createElement("div", { className: "extra content" }, this.props.isAdopted
                ? react_1.default.createElement("button", { className: "ui disabled button" }, "Already adopted")
                : react_1.default.createElement("button", { className: "ui primary button", onChange: this.onAdoptPet }, "Adopt pet"))));
    }
}
exports.default = Pet;
