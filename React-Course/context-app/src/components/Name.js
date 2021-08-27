import React, { Component } from 'react';
import MyContext from './Context';

class Name extends Component {
    render(){
        return (
            <div className="name">
             My name is {this.context.name}. I'm {this.context.age} years old.
             </div>
            )
    }   
}

Name.contextType = MyContext;

export default Name;