/*jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';

var name = 'bill';

var App = React.createClass({
    getInitialState: function() {
        return {
            profiles: [
                {name: 'David'},
                {name: 'Sarah'}
            ]
        }
    },
    render: function() {
        return (
            <section>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name {this.state.profiles[0].name}</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name {this.state.profiles[1].name}</p>
                </section>
            </section>
        )
    }
    // render: function() {
    //     return (
    //         <div>
    //             { /* some comment */ }
    //             <p>Some math: 2 + 2 = {2 + 2}</p>
    //             <p>Name: {name}</p>
    //             <p>Name: {name === 'bill' ? 'hello bill' : 'hello other'}</p>
    //         </div>
    //     )
    // }
    /*
    render: function() {
        console.log('our state');
        console.log(this.state);
        return (
            <section>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name David</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name Sarah</p>
                </section>
            </section>
        )
    }
    */
});

ReactDOM.render(<App />, document.getElementById('app'));



