import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  handleChange = () => {
    console.log(this.find(Pet))
  }

  render() {
    return this.props.pets.map((pet, idx) => {
      return <div key={idx} className="ui cards" onChange={this.handleChange}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>
    })
  }
}

export default PetBrowser
