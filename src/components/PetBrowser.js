import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  onAdoptPet = () => {};

  renderPets = () => {
    //map through and render a pet card component for each pet
    //Warning: Pseudo code below
    //pets => [{},{},{},{}]

    return this.props.pets.map(pet => (
      <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />
    ));
  };
  render() {
    return <div className="ui cards">{this.renderPets()}</div>;
  }
}

export default PetBrowser;
