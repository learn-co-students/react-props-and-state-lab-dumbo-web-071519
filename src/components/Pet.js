import React from "react";

class Pet extends React.Component {
  hasBeenAdopted = () => {};

  render() {
    console.log("pet cards props", this.props);
    let { pet } = this.props;

    return (
      <div className="card" key={pet.id}>
        <div className="content">
          <a className="header">
            {pet.gender === "male" ? " ♀ " : " ♂ "}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age} yrs</p>
            <p>Weight: {pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(pet.id)}
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
