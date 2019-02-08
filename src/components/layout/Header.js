import React, { Component } from 'react';
import './../../App.css';
import SettingBox from './SettingBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    console.log(this.props.faveState);
    return (
      <div>
        <nav style = {navStyle}>
        
            <h1 style={thoughtStyle}><FontAwesomeIcon icon={faBrain}/> thought<span style={postStyle}>POST</span></h1>
            <SettingBox onSearch = {this.props.onSearch} onFave={this.props.onFave} faveState={this.props.faveState}/>
        </nav>
      </div>
    )
  }
}

Header.propTypes ={
    onSearch: PropTypes.func.isRequired,
    onFave: PropTypes.func.isRequired
}

const navStyle = {
    top: '0',
    left: '0',
    width: '100%',
    height: '80px',
    padding: '10px 100px',
    boxSizing: 'border-box'
}

const thoughtStyle = {
    fontSize: '35px',
    color: '#66fcf1',
    float: 'left'
}

const postStyle = {
    fontFamily: 'Roboto-Lite',
    color: '#66fcf1',
    fontWeight: 200
}


export default Header
