import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar';
import CharacterCard from './components/CharacterCard';
import AddCharacterForm from './components/AddCharacterForm';
import Header from './components/Header/Header';



// API Example
// https://rickandmortyapi.com/api/character?name=rick%20sanchez
// %20 allows to create spaces within a url parameter

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: '',
      characters: []
    }
  }

  handleChange = (event) => {
    this.setState({ searchInputValue: event.target.value })
  }

  handleSubmit = () => {
    let searchInputValue = this.state.searchInputValue
    searchInputValue = searchInputValue.split(' ').join('%20')
    let url = `https://rickandmortyapi.com/api/character?name=${searchInputValue}`

    axios.get(url)
      .then(response => this.setState({ characters: response.data.results }))
  }

  deleteCharacter = (id) => {
    const characters = this.state.characters.filter(character => character.id !== id)
    this.setState({ characters })
  }

  addCharacter = (newCharacter) => {
    let characters = this.state.characters;
    characters.push(newCharacter)

    this.setState({ characters: characters })
  }

  editCharacter = (updatedCharacter) => {
    const characters = this.state.characters.map(character => {
      if (character.id === updatedCharacter.id) {
        return updatedCharacter
      } else {
        return character
      }
    })

    this.setState({ characters: characters })
  }

  render() {
    return (
      <div className="container mt-4">
        <Header />
        <SearchBar
          input={this.state.searchInputValue}
          inputChangeHandler={this.handleChange}
          inputSubmitHandler={this.handleSubmit}
        />
        <div className="row">
          <div className="card col-12 col-sm-6 col-md-3 mx-auto" style={{ maxWidth: '250px', margin: '20px' }}>
            <AddCharacterForm addCharacter={this.addCharacter} />
          </div>
          {this.state.characters.map((character) => (
            <CharacterCard
              {...character}
              deleteCharacter={this.deleteCharacter}
              editCharacter={this.editCharacter}
              key={character.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
