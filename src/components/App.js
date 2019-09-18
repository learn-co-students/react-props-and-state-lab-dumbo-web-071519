import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// ### `App`

// 1.  The app's initial state is already defined. App has two children: the
//   `<Filters />` and`<PetBrowser />` components.

// - App should pass a ** callback ** prop, `onChangeType`, to`<Filters />`.This
// callback needs to update`<App />`'s `state.filters.type`

//   - `<Filters />` needs a ** callback ** prop, `onFindPetsClick`.When the
//     `<Filters />` component calls`onFindPetsClick`, `<App />` should fetch a list
// of pets using`fetch()`.

//   - The URL of the API is`/api/pets` with an ** optional query parameter **.
//   - Use app's state.filters to control/update this parameter
//   - If the`type` is`'all'`, send a request to`/api/pets`
//     - If the`type` is`'cat'`, send a request to`/api/pets?type=cat`.Do the
// same thing for `dog` and`micropig`.
//   - Finally set`<App/>`'s `state.pets` with the results of your fetch request
// so you can pass the pet data down as props to`<PetBrowser />`

//   * ** Even though we're using `fetch` here, its responses have been mocked in
// order to make the tests work properly.That means it's important to use the
// _exact_ URLs as described above, or your tests will fail! **

//   The pet data received should include information on individual pets and their
// adoption status.

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  onAdoptPet = (id) => {
    //console.log(event)
    console.log(id)
    let pets = this.state.pets
    pets.map( (pet) => {
      if (pet.id === id){
        pet.isAdopted = true
      }
    })
    this.setState({
      pets
    })
  }

  onChangeType = (event) => {
    //console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    },()=>console.log(this.state))
  }

  onFindPetsClick= (event) => {
    //   - Use app's state.filters to control/update this parameter
//   - If the`type` is`'all'`, send a request to`/api/pets`
//     - If the`type` is`'cat'`, send a request to`/api/pets?type=cat`.Do the
// same thing for `dog` and`micropig`.
//   - Finally set`<App/>`'s `state.pets` with the results of your fetch request
// so you can pass the pet data down as props to`<PetBrowser />`
    let url = '/api/pets'
    if (this.state.filters.type == 'cat'){
      url = '/api/pets?type=cat'
      //console.log("cat")
    } else if (this.state.filters.type=='dog'){
      url = '/api/pets?type=dog'
      //console.log("dog")
    } else if (this.state.filters.type == "micropig"){
      url ='/api/pets?type=micropig'
      //console.log("micropig")
    } else {
      url = '/api/pets'
    }

    fetch(url)
    .then(res=>res.json())
    .then(data =>
      this.setState({
        pets: data
      }, () => console.log(this.state))
    )
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
