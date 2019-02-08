import React, { Component } from 'react';
import Mind from './components/Mind';
import './App.css';
import Header from './components/layout/Header';
import AddThought from './components/AddThought';
import uuid from 'uuid';


class App extends Component {
  state = {
    mind : [],
    search: '',
    fave: false
  }

  // Mark Favorite
  markFavorite = (id) => {
    this.setState({ mind: this.state.mind.map(thought => {
      if(thought.id === id) {
        thought.favorited = !thought.favorited
      }
      return thought;
    })});
  }

  //Update Search
  updateSearch = (event) => {
    this.setState({search: event.target.value.substr(0,20)});
  }

  //Filter Favorites
  filterFave = () => {
    this.setState({fave: !this.state.fave});
    console.log(this.state.fave);
  }

  //Forget thought
  forget = (id) => {
    this.setState({mind: [...this.state.mind.filter(thought => thought.id !== id)]});
  }

  //Add thought
  addThought = (title, desc, timestamp) => {
    const newThought = {
      id: uuid.v4(),
      title,
      desc,
      favorited: false,
      timestamp
    }
    this.setState({ mind: [...this.state.mind, newThought] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header onSearch={this.updateSearch} onFave={this.filterFave} faveState={this.state.fave}/>
          <AddThought addThought={this.addThought}/>
          <div className="mindContainer">
            <Mind mind={this.state.mind} search={this.state.search} fave = {this.state.fave} forget={this.forget} markFavorite={this.markFavorite}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
