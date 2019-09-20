import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  onAdoptPet = () => {};

  renderPets = () => {
    // PASS DOWN PROPS FROM PARENT TO CHILDREN LIKE THIS
    return this.props.pets.map(pet => (
      <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />
      //map through and render a pet card component for each pet
    //pets => [{},{},{},{}]
    ));
  };
  render() {
    return <div className="ui cards">{this.renderPets()}</div>;
  }
}

export default PetBrowser;
