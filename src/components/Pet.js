"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class Pet extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleAdaptClick = () => {
            this.props.onAdoptPet(this.props.pet.id);
        };
    }
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
            react_1.default.createElement("div", { className: "extra content" }, this.props.pet.isAdopted
                ? react_1.default.createElement("button", { className: "ui disabled button" }, "Already adopted")
                : react_1.default.createElement("button", { className: "ui primary button", onClick: this.handleAdaptClick }, "Adopt pet"))));
    }
}
exports.default = Pet;
