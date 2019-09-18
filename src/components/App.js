import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    fetch('/api/pets').then(r => r.json()).then(d => {
      this.setState({
        pets: d
      })
    })
  }

  onChangeType = (e) => {
    console.dir(e.target.value)
    let filteredType = e.target.value
    this.setState({
      filters: {
        type: filteredType
      }
    })
  }

  onFindPetsClick = (e) => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all'){
      endpoint += `?type=${this.state.filters.type}`
    }
    fetch(endpoint).then(r => r.json()).then(d => {
      this.setState({
        pets: d
      })
    })
  }

  onAdoptPet = (petId) => {
    console.log('I am being called from my grandchild')
    let foundPet = this.state.pets.map(p => p.id === petId ? {...p, isAdopted: true} : p)
    console.log(foundPet)
    //let alteredPet = {...foundPet, isAdopted: true}
    this.setState({
      pets: this.state.pets.map(p => p.id === petId ? {...p, isAdopted: true} : p)
    })
  }

  render() {
    return (
      <div className="ui container" style={{width: '80%', margin: '2% auto'}}>
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
