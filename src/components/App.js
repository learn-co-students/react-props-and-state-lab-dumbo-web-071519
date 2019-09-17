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

  const onChangeType =()=>{
    this.setState({
        filters.type: 
        }
    })
      
    }
    

  }
  const onFindPetsClick=()=>{

  }

  render() {
    return (
      <div className="ui container" style={{ width: "80%", margin: "5% auto" }}>
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
