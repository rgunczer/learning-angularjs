/*jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';

// prop: inmutable
// state: mutable

class Profile extends React.Component {
    render() {
        let hobbies = this.props.hobbies.map(hobby => {
            return <li>{hobby}</li>
        });
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.name} is {this.props.age} years old and {this.props.bio}</p>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies}
                </ul>
            </div>
        );
    }
}

// function statement - declaration HOISTED
function myFunction() {

}

// function expression NOT HOISTED
var myOtherFunction = function() {

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    name: 'Suez',
                    age: 30,
                    bio: 'enjoys swimming and biking',
                    hobbies: ['swimming', 'biking']
                },
                {
                    name: 'Bill',
                    age: 40,
                    bio: 'enjoys long walks on the beach',
                    hobbies: ['gardening', 'games']
                }
            ]
        }
    }

    render() {
        let profile1 = this.state.profiles[0];
        let profile2 = this.state.profiles[1];
        let profiles = this.state.profiles.map(profile => {
            return (
                <Profile 
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                    hobbies={profile.hobbies}
                />
            );
        });
        return(
            // <div>
            //     <h3>Bill</h3>
            //     <p>Bill is 40 years old and enjoys long walks on a beach</p>
            //     <h3>Hobbies</h3>
            //     <ul>
            //         <li>gardening</li>
            //         <li>games</li>
            //     </ul>
            // </div>
            // <div>
            //     <Profile 
            //         name={profile1.name}
            //         age={profile1.age}
            //         bio={profile1.bio}
            //         hobbies={profile1.hobbies}
            //     />
            //     <Profile 
            //         name={profile2.name}
            //         age={profile2.age}
            //         bio={profile2.bio}
            //         hobbies={profile2.hobbies}
            //     />
            // </div>
            <div>
                {profiles}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));