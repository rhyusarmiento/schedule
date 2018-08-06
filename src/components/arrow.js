import React, { Component } from 'react';

class Arrow extends Component {
    
    constructor(props) {
        super(props)
        
        this.state= {
            status: false
        }
    }
    
    toggleArrow = function() {
        if(this.state.status) {
            
        } else {
            
        }
    }.bind(this);
    
    
    render() {
        return (
            <a onClick={() => this.toggleArrow()} className={`${this.props.className} arrow`}></a>
        )
    }
}

export default Arrow;