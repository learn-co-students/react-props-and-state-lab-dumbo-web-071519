import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // !This is taking the pet array from it's PARENT and rendering the corret info 
  placePets = () => {
    return this.props.pets.map( (p) => {
      // let {name, age, gender, weight, isAdopted} = pet
      return <Pet key={ p.id } pet={ p } onAdoptPet={ this.props.onAdoptPet }/> 
    })
  }
  render() {
    return <div className="ui cards">{this.placePets()} </div>
  }
}

export default PetBrowser
