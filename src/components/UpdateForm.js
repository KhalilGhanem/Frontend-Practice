import React, { Component } from 'react';
import {Modal ,Button,Form} from 'react-bootstrap';

class UpdateForm extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="updateForm" onSubmit={(event)=>this.props.updatePokemon(event)}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={this.props.name} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>url</Form.Label>
                <Form.Control type="text" name="url" defaultValue= {this.props.url} />
            </Form.Group>
            <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="updateForm" onClick={this.props.handleClose}>
            Update
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
        );
    }
}

export default UpdateForm;
