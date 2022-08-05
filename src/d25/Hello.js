import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    render(){
        return(
            <div>
            Hello <b>{this.props.toWhat}</b>
            </div>  
        );
    }
}

export default Hello;