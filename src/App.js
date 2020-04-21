import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';



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

  render() {
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
            key={character.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
