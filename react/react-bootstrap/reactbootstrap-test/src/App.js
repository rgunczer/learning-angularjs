import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal } from 'react-bootstrap';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            modalText: 'joel and ellie'
        };
    }
    handleShow() {
        this.setState({ show: true, modalText: 'another text' })
    }
    handleClose() {
        this.setState({ show: false })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React :-)</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <Button bsStyle="primary" onClick={this.handleShow}>Show Modal</Button>
                </p>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{this.state.modalText}</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default App;
