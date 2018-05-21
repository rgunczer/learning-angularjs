import React from 'react';
import Profile from './Profile.jsx';
import AddProfile  from './AddProfile.jsx';

import {getProfiles} from '../utils/profileApi';

var xhr;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        };
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        getProfiles()
            .then(profiles => {
                this.setState({
                    profiles: profiles
                })
            })


        // fetch('http://127.0.0.1:8080/prof.json', {
        //     method: 'get',
        //     mode: 'no-cors'
        // })
        // fetch('http://localhost:8888/profiles')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({
        //             profiles: data
        //         });
        //     })
        //     .catch(err => {
        //         console.log('err:' + err);
        //     })

    //     xhr = new XMLHttpRequest();
    //   //  xhr.open('GET', 'http://127.0.0.1:8080/prof.json', true);
    //     xhr.open('GET', 'http://:8080/prof.json', true);
    //     xhr.send();

    //     xhr.addEventListener('readystatechange', this.processRequest, false);

    }

    // processRequest() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var response = JSON.parse(xhr.responseText);
    //         console.log(response);
    //     }
    // }

    addUser(newProfile) {
        console.log(this);
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        });
    }
    render() {
        console.log('rendered...');
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
            </div>
        );
    }
}
