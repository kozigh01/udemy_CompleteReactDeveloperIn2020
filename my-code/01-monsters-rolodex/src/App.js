import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import Search from './components/search/search';


class App extends React.Component {
  state = { monsters: [], search: "" }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(items => this.setState({ monsters: items }))
  }

  onSearchChange = (searchPhrase) => {
    this.setState({ search: searchPhrase }, () => console.log(this.state.search));
  } 


  constructor() {
    super();
  }

  render = () => {
    const { search, monsters } = this.state;
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
    console.log(search, filteredMonsters);

    if (this.state.monsters.length == 0) {
      return <div></div>;
    }

    return (
      <div>
        <Search searchPhrase={this.state.search} onSearchPhraseChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
