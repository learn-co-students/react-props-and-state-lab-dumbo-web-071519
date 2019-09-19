import React from 'react'

class Pet extends React.Component {
  render() {
    
    return (
      this.props.Pet.map(pet=> 
      <div className="card" key={pet.id}>
        <div className="content">
          <a className="header">
            {pet.gender === "male" ? ' ♀ ' : ' ♂ ' }
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{pet.age} yrs</p>
            <p>Weight: {pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" onClick={(e)=> console.log(e) } disable={false}>Already adopted</button>
          <button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>
        </div>
      </div>
      )
    )
  }
}

export default Pet
