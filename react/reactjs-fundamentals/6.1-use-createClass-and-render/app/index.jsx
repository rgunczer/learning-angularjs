/*jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';

var X = React.createClass({
    render: function() {
        return (
            <p> X </p>
        );
    }
});

var App = React.createClass({
    render: function() {
        return(
            <div>
                <p>More stuff</p>
                <p>Hello Wtorld</p>
                <X />
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));



