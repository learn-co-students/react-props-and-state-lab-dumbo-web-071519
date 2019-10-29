import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  //WHY doesn't this work:
  // renderPets = () => {
  //   this.props.pets.map((pet) => {
  //     return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
  //   })
  // }

  render() {
    console.log('pets from PetBrowser', this.props.pets)
    let petCards = this.props.pets.map(pet => (
     < Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    ))
    return <div className="ui cards">
      {petCards}
    </div>
  }
}

export default PetBrowser
