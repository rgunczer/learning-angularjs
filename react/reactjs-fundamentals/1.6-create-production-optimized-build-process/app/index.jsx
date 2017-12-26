// var React = require('react');
// var render = require('react-dom').render;
// var ourLib = require('./ourLib');

import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <p>Hello World from React with Webpack!</p>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));