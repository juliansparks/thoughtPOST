import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thought from './Thought';
import './../App.css';

class Mind extends Component {

  render() {
    let filteredThoughts = this.props.mind;
    let faveStatus = this.props.fave;
    if(faveStatus === true) {
      filteredThoughts = filteredThoughts.filter((thought) => {return thought.favorited})
    }

    let searchStatus = this.props.search;
    if (searchStatus) {
      filteredThoughts = filteredThoughts.filter((thought) => {
        return (thought.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 
        || thought.desc.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1);
      })
    }
    return filteredThoughts.map((thought) => (
        <Thought key={thought.id} thought={thought} forget={this.props.forget} markFavorite={this.props.markFavorite}/>
    ))  
    }
}

Mind.propTypes = {
  mind: PropTypes.array.isRequired,
  markFavorite: PropTypes.func.isRequired,
  forget: PropTypes.func.isRequired
}

export default Mind;