import React, { Component } from 'react';
import JSONPretty from 'react-json-pretty';
import './result.scss'
import 'react-json-pretty/themes/monikai.css';

function Result({res}) {
    
        if (res) {
            return (
                <>
                    <JSONPretty className="result-data" data={res}></JSONPretty>
                </>
            )
        } else {
            return null
        }
        
    
}

export default Result