import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import AddCharacterForm from './components/AddCharacterForm';



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

  editCharacter = (event, updatedCharacter) => {
    event.preventDefault();
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
    console.log(this.state.characters)
    return (
      <div className="App">
        <SearchBar
          input={this.state.searchInputValue}
          inputChangeHandler={this.handleChange}
          inputSubmitHandler={this.handleSubmit}
        />
        {this.state.characters.map(character => (
          <CharacterCard
            {...character}
            deleteCharacter={this.deleteCharacter}
            editCharacter={this.editCharacter}
            key={character.id}
          />
        ))}
        <AddCharacterForm addCharacter={this.addCharacter} />
      </div>
    );
  }
}

export default App;
