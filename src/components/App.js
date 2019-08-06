import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { runInThisContext } from 'vm';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  setFilterType = (event) => {
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  getPetsList = () => {
    let query = (this.state.filters.type === "all" ? "" : "?type=" + this.state.filters.type)
    console.log("fetching /api/pets" + query)
    return fetch('/api/pets' + query).then((resp) => {
      return resp.json();
    }).then((json) => {
      console.log(json)
      this.setState({
        ...this.state,
        pets: json
      })
    })
  }

  onAdoptPet = (id) => {
    let adoptedPetIndex = this.state.pets.findIndex((pet) => {
      return pet.id === id
    })
    let newPets = this.state.pets
    newPets[adoptedPetIndex].isAdopted = true
    this.setState({
      ...this.state,
      pets: newPets
    })
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
              <Filters onChangeType={this.setFilterType} onFindPetsClick={this.getPetsList} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
