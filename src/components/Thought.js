import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Thought extends Component {
    getStyle = () => {
        return {
            backgroundPosition: this.props.thought.favorited ? '-1400px 0' : '',
            transition: this.props.thought.favorited ? 'background 1s steps(28)' : ''
        }
    }

    render () {
        const {id, title, desc, timestamp} = this.props.thought;
        return (
            <div style={thoughtStyle}>
                <button style={btnStyle} onClick={this.props.forget.bind(this, id)}>x</button>
                <h3 style={headStyle}>{title} </h3>
                <p style={contentStyle}>{desc}</p>
                <input type="button" style = {this.getStyle()} className={'heart'} onClick={this.props.markFavorite.bind (this, id)}/>
                <h2 style={timeStyle}>{timestamp}</h2>
            </div>
        )
    }
}

Thought.propTypes = {
    thought: PropTypes.object.isRequired,
    markFavorite: PropTypes.func.isRequired,
    forget: PropTypes.func.isRequired
}

const btnStyle = {
    background: 'transparent',
    color: '#66fcf1',
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '0px 15px',
}

const headStyle = {
    fontSize:'24px',
    color: '#c5c6c7'
}

const contentStyle = {
    fontSize: '18px',
    color: '#c5c6c7'
}

const timeStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    padding: '15px',
    fontFamily: 'SourceSans',
    fontSize: '16px',
    color: '#c5c6c7'
}

const thoughtStyle = {
    backgroundColor: '#1f2833',
    color: '#66fcf1',
    padding: '30px',
    margin: '10px 5px',
    width: '250px',
    minHeight: '250px',
    maxHeight: '250px',
    position: 'relative'
}

export default Thought;