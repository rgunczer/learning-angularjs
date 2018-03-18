import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
    render() {
        let hobbies = this.props.hobbies.map(hobby => {
            return <li>{hobby}</li>;
        });
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.name} is {this.props.age} and {this.props.bio}
                </p>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies}
                </ul>
            </div>
        );
    }
}

// function statement
function myFunction() {

}

// function expression
var myOtherFunction = function() {

}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    name: 'Sue',
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
        };
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
        return (
            <div>
                {profiles}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));