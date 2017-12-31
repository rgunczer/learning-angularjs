/*jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    render: function() {
        // return(
        //     React.createElement('p', {}, 'HeLLo World')
        // )
        // return (
        //     <div>
        //         <h1>Welcome to my site</h1>
        //         <p>Some content</p>
        //     </div>
        // )
        var elements = (
            <div>
                <h1> Testing </h1>
                <p> One Two three </p>
            </div>
        )
        return elements;
    }
});

ReactDOM.render(<App />, document.getElementById('app'));



