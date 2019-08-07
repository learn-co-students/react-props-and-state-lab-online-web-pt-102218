import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = e => {
    this.setState({ filters: { ...this.state.filters, type: e.target.value } });
  };

  onFindPetsClick = e => {
    let params = this.state.filters.type!=="all" ? `?type=${this.state.filters.type}` :""
    fetch(`/api/pets${params}`)
      .then(res => res.json())
      .then(res => this.setState({pets:res}));
  };

  onAdoptPet = (id)=>{
    
    let newPets = this.state.pets.map((pet)=>{
      return pet.id===id ? {...pet,isAdopted:true} : pet
    })
    this.setState({pets:newPets})
    
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
