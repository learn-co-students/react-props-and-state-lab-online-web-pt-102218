import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
  }

  onFindPetsClick = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets').then(response => response.json()).then(pets => {
        this.setState({
          pets: pets
        });
      });
    } else{
      fetch(`/api/pets?type=${this.state.filters.type}`).then(response => response.json()).then(pet => {
        this.setState({
          pets: pet
        });
      });
    }
  };

  onChangeType = (type) => {
    this.setState({
      filters:{
        type: type
      }
    })
  };

  onAdoptPet = (id) => {
    let pet = this.state.pets.find(function(pet) {
      return pet.id === this
    },id)
    debugger
    let newPets = this.state.pets.map(function(oldPet){
      if(oldPet === pet){
        oldPet.isAdopted = true
        return oldPet
      }else{
        return oldPet
      }
    })
    this.setState({
      pets: newPets
    })
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.state.filters.type} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
