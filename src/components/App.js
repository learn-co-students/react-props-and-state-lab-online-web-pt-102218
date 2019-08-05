"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Filters_1 = __importDefault(require("./Filters"));
const PetBrowser_1 = __importDefault(require("./PetBrowser"));
class App extends react_1.Component {
    constructor(props) {
        super(props);
        this.onChangeType = (type) => {
            this.setState({
                ...this.state,
                filters: {
                    ...this.state.filters,
                    type: type
                }
            });
        };
        this.onFindPetsClick = () => this.loadPets();
        this.loadPets = () => {
            let petsApiUrl = (this.state.filters.type === "all"
                ? "/api/pets"
                : `api/pets?type=${this.state.filters.type}`);
            fetch(petsApiUrl)
                .then(resp => resp.json())
                .then(pets => this.setState({
                ...this.state,
                pets: pets
            }));
        };
        this.state = {
            pets: [],
            filters: {
                type: 'all'
            }
        };
        this.loadPets();
    }
    onAdoptPet(e) {
    }
    render() {
        return (react_1.default.createElement("div", { className: "ui container" },
            react_1.default.createElement("header", null,
                react_1.default.createElement("h1", { className: "ui dividing header" }, "React Animal Shelter")),
            react_1.default.createElement("div", { className: "ui container" },
                react_1.default.createElement("div", { className: "ui grid" },
                    react_1.default.createElement("div", { className: "four wide column" },
                        react_1.default.createElement(Filters_1.default, { filters: this.state.filters, onChangeType: this.onChangeType, onFindPetsClick: this.onFindPetsClick })),
                    react_1.default.createElement("div", { className: "twelve wide column" },
                        react_1.default.createElement(PetBrowser_1.default, { pets: this.state.pets, onAdoptPet: this.onAdoptPet }))))));
    }
}
exports.default = App;
