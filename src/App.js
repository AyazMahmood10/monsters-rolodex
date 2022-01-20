import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { response.json()
      .then((data) => {
        this.setState({
          monsters:data
        })
      })
    })
  }

  handleOnChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    })

    return (
      <>
        <div className='App'>
          <h1> Monsters Rolodex </h1>
          <SearchBox
            placeholder='search monsters'
            handleOnChange={this.handleOnChange}
          />
          <CardList monsters = {filteredMonsters}/>
        </div>
      </>
    );
  }
}

export default App;
