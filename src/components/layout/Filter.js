import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../App.css'

class Filter extends Component {
    getStyle = () => {
        return {
            backgroundPosition: this.props.faveState ? '-1400px 0' : '',
            transition: this.props.faveState ? 'background 1s steps(28)' : ''
        }
    }
    render() {
        console.log(this.props.faveState);
        let search = this.props.onSearch;
        let filter = this.props.onFave;
        return (
            <div>
                <input style= {searchStyle} type="text" placeholder="Remember something..." onChange={search}/>
                <input type = "button" onClick={filter} style= {this.getStyle()} className={'filtbtn'}/>
                <h2 style={faveHeadStyle}>Favorites Only</h2>
            </div>

        )
    }
}

const searchStyle = {
    background: '#0b0c10',
    color: '#66fcf1',
    border: 'none',
    borderBottom: '1px solid  #66fcf1',
    fontFamily: 'SourceSans',
    fontSize: '14px',
    padding: '5px'
}


const faveHeadStyle = {
    margin: '12.5px 0'
}

Filter.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Filter

