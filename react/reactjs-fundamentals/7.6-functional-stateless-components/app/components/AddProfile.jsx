import React from 'react';

export default class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            bio: '',
            hobby: ''
        };
        this.handleName = this.handleName.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleHobby = this.handleHobby.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleBio(e) {
        this.setState({
            bio: e.target.value
        });
    }

    handleHobby(e) {
        this.setState({
            hobby: e.target.value
        });
    }

    handleClick(e) {
        let newProfile = {
            name: this.state.name,
            bio: this.state.bio,
            hobbies: [
                this.state.hobby
            ]
        }
        this.props.addUser(newProfile);
    }

    render() {
        return (
            <div>
                <p>Add a new profile</p>
                {/* <span>Value of input: {this.state.name}</span> */}
                <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.bio}</p>
                    <p>{this.state.hobby}</p>
                </div>
                <input onChange={this.handleName} value={this.state.name}></input>
                <input onChange={this.handleBio} value={this.state.bio}></input>
                <input onChange={this.handleHobby} value={this.state.hobby}></input>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}
