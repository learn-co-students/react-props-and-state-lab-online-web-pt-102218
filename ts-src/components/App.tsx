import React, { Component, MouseEvent } from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import {PetData, PetDataType, PetDataGender} from '../types'

interface AppState {
  pets: PetData[],
  filters: {
    type: string
  }
}

class App extends Component<{}, AppState>{

  constructor(props?: {}) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.loadPets()
  }

  onChangeType = (type: PetDataType) => {
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  onFindPetsClick = () => this.loadPets()

  loadPets = () => {
    let petsApiUrl = (this.state.filters.type === "all"
      ? "/api/pets"
      : `api/pets?type=${this.state.filters.type}`)

    fetch(petsApiUrl)
      .then(resp => resp.json())
      .then(pets =>
        this.setState({
          ...this.state,
          pets: pets
        })
      )
  }

  onAdoptPet(e: React.MouseEvent) {
    
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
                filters={this.state.filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
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
