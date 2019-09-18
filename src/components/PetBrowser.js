import React from 'react'

import Pet from './Pet'

// ### `PetBrowser`

// 1.  Should receive a`pets` prop.This is an array of pets that the component
// uses to render`<Pet />` components.App should determine which pets to pass
// down as props.App should be responsible for filtering this list based on the
// types of pets the user wants to see.

// - Should receive an`onAdoptPet` prop.This callback prop gets passed to its
//   - `<Pet />` children components.

class PetBrowser extends React.Component {

  render() {
    return <div className="ui cards">{this.props.pets.map( (pet)=> 
      {return <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet} /> }
      )}
      </div>
  }
}

export default PetBrowser
