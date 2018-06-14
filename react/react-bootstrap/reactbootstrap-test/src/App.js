import React, { Component } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';
import MessageBox from './MessageBox';
import Menu from './Menu';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.onShowMessageBox = this.onShowMessageBox.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleMenuSelect = this.handleMenuSelect.bind(this);

        this.state = {
            messageBoxData: { show: false }
        };
    }
    onShowMessageBox() {
        this.setState({
            messageBoxData: {
                show: true,
                title: 'some modal title',
                message: 'sample modal message'
            }
        });
    }
    handleClose() {
        this.setState({ messageBoxData: { show: false } })
    }
    handleMenuSelect(selectedMenuItem) {
        this.setState({
            messageBoxData: {
                show: true,
                title: 'selected menu key',
                message: selectedMenuItem
            }
        });
    }
    render() {
        return (
            <div>
                <PageHeader bsClass={'App-header'}>
                    Portal Link <small>DIR Summary</small>
                </PageHeader>
                <Menu onselect={this.handleMenuSelect}/>
                <p>
                    <Button bsStyle="primary" onClick={this.onShowMessageBox}>Show Modal</Button>
                </p>

                <MessageBox
                    modalData={this.state.messageBoxData}
                    onclose={this.handleClose} />
            </div>
        );
    }
}

export default App;
