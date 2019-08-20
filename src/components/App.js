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

    this.handleChange = this.handleChange.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)
  }

  handleChange(animal){
    this.setState({
      ...this.state,
      filters: {
        type: animal
      }
    })
  }

  handleFindPetsClick(e){
    if(this.state.filters.type == "all"){
      fetch('/api/pets')
      .then(response => response.json())
      .then(json=> {
        this.setState({
          pets: json
        })
      })
    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(json=> {
        this.setState({
          pets: json
        })
      })
    }
  }

  handleAdoptPet(petId){
    const pets = [...this.state.pets];
    pets.find((pet) => pet.id == petId).isAdopted = true;
    this.setState({
      ...this.state,
      pets : pets
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
              <Filters 
                onChangeType={this.handleChange}
                onFindPetsClick={this.handleFindPetsClick}
                />

            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets} 
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
