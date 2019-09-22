import React from 'react'

class Pet extends React.Component {

  state = {
    isAdopted: this.props.pet.isAdopted
  }

  isMale = () => {
    const {gender} = this.props.pet
    if (gender === "male") return true
    else return false
  }

  isAdopted = () => {
    return this.state.isAdopted
  }

  render() {
    const {name, type, age, weight, id} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.isMale() ? '♂' : '♀'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button
            className={this.isAdopted(id) ? "ui primary button" : "ui disabled button"}
            onClick={(e)=>{this.props.onAdoptPet(id)}}
          >Already adopted</button>
          <button
            className={this.isAdopted() ? "ui disabled button" : "ui primary button"}
            onClick={(e)=>{this.props.onAdoptPet(id)}}
          >Adopt pet</button>
        </div>
      </div>
    )
  }
}

// "ui disabled button"
// "ui primary button"

export default Pet
