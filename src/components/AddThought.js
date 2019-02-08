import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddThought extends Component {

    state= {
        title: '',
        desc: '',
        timestamp: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addThought(this.state.title, this.state.desc, timestamp('MM/DD/YYYY HH:mm'));
        this.setState({title: '', desc: '', timestamp:''});
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex', margin:'0 auto', flexDirection:'column', width:'500px'}}>
                <input 
                type="text" 
                name="title" 
                style={{flex: '10', padding: '5px'}}
                className="textbox"
                placeholder="What's on your mind?"
                value={this.state.title}
                onChange={this.onChange}
                />
                <textarea
                name="desc"
                style={{flex:'10', padding:'5px'}}
                className="textbox"
                placeholder="Describe what you're thinking..."
                onChange={this.onChange}
                value={this.state.desc}
                >
                </textarea>
                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}/>
            </form>
        )
    }
}

const timestamp = require('time-stamp');

AddThought.propTypes = {
    addThought: PropTypes.func.isRequired
}

export default AddThought;