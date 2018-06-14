import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import { PropTypes } from 'prop-types';

class MessageBox extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.props.onclose();
    }
    render() {
        if (!this.props.modalData.show) {
            return null;
        }
        const data = this.props.modalData;
        return (
            <Modal backdrop='static' show={true} keyboard={false} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{data.message}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MessageBox;
