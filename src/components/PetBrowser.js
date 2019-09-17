import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  renderPets = (data) => {
    
    return data.map((pet) => {
      // return <Pet key={pet.id} type={pet.type} name={pet.name} age={pet.age} gender={pet.gender}weight={pet.weight} isAdopted={pet.isAdopted} />
      return (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />
      )
    });
  }
  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>
  }
}

export default PetBrowser
