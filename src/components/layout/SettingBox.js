import React, { Component } from 'react'
import Popup from "reactjs-popup";
import Filter from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import '.././../App.css'

export class SettingBox extends Component {
  render() {
    console.log(this.props.faveState);
    return (
      <div>
        <ul style={widgetStyle}>
                <li style={listStyle}>
                    <Popup
                        className="popup-content"
                        trigger={<button className="setting-btn"><FontAwesomeIcon icon={faFilter}/></button>}
                        position="bottom center"
                        on="hover">
                        <Card title="Filter Thoughts"/>
                        <Filter onSearch = {this.props.onSearch} onFave = {this.props.onFave} faveState ={this.props.faveState}/>
                    </Popup>
                </li>
                <li style={listStyle}>
                    <Popup
                        className="popup-content"
                        trigger={<button className="setting-btn"><FontAwesomeIcon icon={faQuestion}/></button>}
                        position="bottom center"
                        on="hover">
                        <Card title="Help" 
                        content="To add a new thought, type out a title, description, and/or tag and hit submit.
                        Click the 'x' icon to forget thoughts. Click the heart icon to mark long-term thoughts. Filter thoughts by long-term thoughts only or search key words."/>
                    </Popup>
                </li>
            </ul>
      </div>
    )
  }
}

const Card = ({title, content}) => (
    <div style={cardStyle} className='card'>
        <div className='header'>{title}</div>
        <div className='content'>{content}
        </div>
    </div>
);

const cardStyle = {
    color: '#c5c6c7',
    backgroundColor: '#1f2833',
    border: 'transparent',
    fontFamily: 'SourceSans',
    padding: '10px'
}

const widgetStyle = {
    float: 'right',
    margin: '0',
    padding: '0',
    display: 'flex'
}

const listStyle = {
    listStyle: 'none'
}

export default SettingBox
