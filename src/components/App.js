import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = event => {
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        type: event.target.value
      }
    });
    console.log(this.state.filters.type);
  };

  petFetch = pet => {
    console.log("pet fetch");
    return fetch(`/api/pets${pet}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState(
          {
            pets: data
          },
          () => console.log(this.state)
        );
      });
  };

  onFindPetsClick = event => {
    let species = this.state.filters.type;
    species === "all" ? (species = "") : (species = "?type=" + species);
    return this.petFetch(species);
  };

  onAdoptPet = id => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === id)
          return {
            ...pet, // because there are a bunch of keys in the pet objects in the pets array
            isAdopted: true
          };
        else {
          return pet;
        }
      })
    });
  };
  render() {
    return (
      <div className="ui container" style={{ width: "80%", margin: "5% auto" }}>
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
