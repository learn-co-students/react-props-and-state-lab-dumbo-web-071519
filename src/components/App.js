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

  url = () => {
    return "/api/pets/";
  };

  onChangeType = event => {
    const { filters } = this.state;
    this.setState({
      filters: {
        ...filters,
        type: event.target.value
      }
    });
    console.log(this.state.filters.type)
  };

  sendPets=(pet)=>{
    return pet
  }
  petFetch=(pet)=>{
    return fetch(`/api/pets${pet}`)
    .then(resp => resp.json())
    .then(data =>  this.sendPets(data))
  }

  onFindPetsClick = (event) => {
    let species = this.state.filters.type
    species === 'all' ? species = "" : species = ("?type="+species) 
    return  this.petFetch(species)
    
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
              <PetBrowser Pets={this.sendPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
