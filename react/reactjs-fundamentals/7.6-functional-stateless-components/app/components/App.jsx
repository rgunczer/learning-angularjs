import React from 'react';
import Profile from './Profile.jsx';
import AddProfile  from './AddProfile.jsx';

//var myFunction = stuff => console.log(stuff);

var MyComponent = props => (
    <div>
        <p>I am a functional Component</p>
        <p>{props.msg}</p>
    </div>
)

// class MyComponent extends React.Component {
//     render() {
//         return (
//             <p>{this.props.hello}</p>
//         )
//     }
// }

export default class App extends React.Component {
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
        this.addUser = this.addUser.bind(this);
    }
    addUser(newProfile) {
        console.log(this);
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        });
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
                <AddProfile addUser={this.addUser} />
                <MyComponent msg={'message goes here'} />
            </div>
        );
    }
}
