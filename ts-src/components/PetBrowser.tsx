import React, { Component } from 'react'
import {PetData, PetDataType, PetDataGender} from '../types'

import Pet from './Pet'

type PetBrowserProps = {
  pets: PetData[],
  onAdoptPet: (e: React.MouseEvent) => void
}

class PetBrowser extends Component<PetBrowserProps> {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet =>
          <Pet pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} key={pet.id} />
        )}
      </div>
    )
  }
}

export default PetBrowser
