import React, { Component, MouseEvent, MouseEventHandler } from 'react'
import {PetData, PetDataType, PetDataGender} from '../types'

interface PetProps {
  pet: PetData,
  isAdopted: boolean,
  onAdoptPet: MouseEventHandler,
}

class Pet extends Component<PetProps>{
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {
              this.props.pet.gender === "female" ? '♀' :
              this.props.pet.gender === "male" ? '♂' :
              this.props.pet.gender
            }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted
            ? <button className="ui disabled button">Already adopted</button>
            : <button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
