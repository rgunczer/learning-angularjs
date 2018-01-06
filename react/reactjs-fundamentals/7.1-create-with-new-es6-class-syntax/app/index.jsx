/*jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {name: 'Sue'},
                {name: 'Bill'}
            ]
        }
    }

    render() {
        return(
            // <p>Hello from es6</p>
            <div>
                <p>{this.state.profiles[0].name}</p>
                <p>{this.state.profiles[1].name}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));