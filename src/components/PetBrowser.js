import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  genPets = (pet) => {
    return <Pet key={pet.id} pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
  };

  displayPets = () => {
    return this.props.pets.map(pet => this.genPets(pet))
  };


  render() {
    return(
    <div className="ui cards">{this.displayPets()}}</div>
    )}
}

export default PetBrowser