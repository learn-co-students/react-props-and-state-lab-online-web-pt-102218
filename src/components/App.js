import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      },
    }
    this.handleChangeType = this.handleChangeType.bind(this)
    this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  handleChangeType = () => {
    this.setState({
      type: this.state.filters.type
    })
  };

  handleFindPetsClick = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets').then(resp => resp.json()).then(pets => {
        this.setState({
          pets: pets
        })
      })

    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`).then(resp => resp.json()).then(pet => {
        this.setState({
          pets: pet
        })
      })
    }    
  };

  onAdoptPet = (id) => {
    let pet = this.state.pets.find((pet) => {
      return pet.id = this
    },id );
    let newPet = (oldPet) => {
      if(oldPet === pet){
        oldPet.isAdopted = true
        return oldPet;
      } else{
        return oldPet;
      };
    };
    this.setState({
      pets: newPet
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
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
