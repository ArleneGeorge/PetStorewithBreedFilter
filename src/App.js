import React, {Component} from 'react';
import './App.css';
import Dogs from './Dogs.js';
// import Dog from './dog.js'

class App extends Component {
  state = {
    pets: [{
      id: 1,
      name: "Moki",
      gender: "M",
      breed: "Mutt",
      imageUrl:"https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/15894551_1248175168604330_8324937998369744479_n.jpg?_nc_cat=108&_nc_oc=AQkjEiEn9wytK1zXHKE6t_8wgXAYMxY-rd_D2XsR4iFGW-yKwSBYP8hlVFt8DCYqWmF2eUVFGAO5mvaQe7pKA4t8&_nc_ht=scontent.fapa1-1.fna&oh=a9c7686fb9bba628f9c4b7fb7e1a2c4a&oe=5E591231"
    },
     {
      id: 2,
      name: "King",
      gender: "M",
      breed: "German Shepard",
      imageUrl:"https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/69322724_10156487560996451_5781738627159556096_n.jpg?_nc_cat=101&_nc_oc=AQl8JHROD3sQba7knSIyEMuqF9NMSJia4IARrp6pJiKoqG-nmEP3mvUtOzrPMV8gyqTf8wytLbOMtqpm2ljb5Ddt&_nc_ht=scontent.fapa1-1.fna&oh=9c7ed29d98be3ee2ae6b1ab80c12a3a8&oe=5E19E73C"
    },
     {
      id: 3,
      name: "Rico",
      gender: "M",
      breed: "Chihuahua",
      imageUrl:"https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10881529_744878345607259_7140125930667664984_n.jpg?_nc_cat=103&_nc_oc=AQmP7hkcPlCuAZlMlT5WqB6k-rJO4qFzlZHnqBOZhv62CgUuFR2omQV3G5AuiG8i3zrnz_C8a-AgaDDKYQ9meMj8&_nc_ht=scontent.fapa1-2.fna&oh=7baee494f5465b96dbc97b2b00ef324a&oe=5E1897B6"
    }],
    selectedBreed: "",
  }
  petsWithSymbols = this.state.pets.map(pet => {
    const genderMappings = {
      M: "♂",
      F: "♀"
    }
    pet.genderSymbol = genderMappings[pet.gender]
    return pet 
  })

  breeds = this.state.pets.map(pet => pet.breed)
  $breeds = this.breeds.map( breed => {
    return <option value={breed}>{breed}</option>
  })
  selectedPets = () => this.state.pets.filter(pet => {
    return pet.breed === this.state.selectedBreed
  })
  selectBreed = event => {
    this.setState({
      selectedBreed: event.target.value
    })
  }
  render(){
  return (
    <div className="App">
      <h1>Pet Store</h1>
      <select onChange={this.selectBreed}>
        {this.$breeds}

      </select>
      <ul className="dogs">

        <Dogs dogs={this.selectedPets()}/>
      </ul>
    </div>
  );
  }
}

// function delete(){
//   //this is the function
// }

// const delete = (){
//   //this referring to the class not the funtion you are writing
// }

// thisWillWork = () => {

// }
// thisWontWork(){

// }

export default App;
