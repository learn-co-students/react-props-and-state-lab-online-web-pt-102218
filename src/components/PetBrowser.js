import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  genPet(petData) {
    return <Pet key={petData.id} pet={petData} isAdopted={petData.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
  }

  displayPets() {
    return this.props.pets.map((petData) => this.genPet(petData))
  }
  render() {
    return (
      <div className="ui cards">
        {this.displayPets()}
      </div>
    )
  }
}

export default PetBrowser
