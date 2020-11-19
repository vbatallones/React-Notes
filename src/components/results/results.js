import React, { Component } from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

class Result extends Component {

    
    
    render() {
        let list = this.props.list.results;
        console.log(list)

        return(
            <>
            <JSONPretty data={list}></JSONPretty>
            </>
        )
    }
}

export default Result