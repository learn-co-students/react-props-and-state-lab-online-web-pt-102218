"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Pet_1 = __importDefault(require("./Pet"));
class PetBrowser extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "ui cards" }, this.props.pets.map(pet => react_1.default.createElement(Pet_1.default, { pet: pet, isAdopted: pet.isAdopted, onAdoptPet: this.props.onAdoptPet }))));
    }
}
exports.default = PetBrowser;
