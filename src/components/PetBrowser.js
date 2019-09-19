import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  onAdoptPet =()=>{

  }
  render() {
    return <div className="ui cards">
      <Pet onAdoptPet={this.onAdoptPet} Pet={this.props.Pets} />
    </div>
  }
}

export default PetBrowser
