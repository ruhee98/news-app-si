import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const BootstrapModal = (props) => (
  <Modal show={props.show} onHide={props.onDismiss}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{props.body}</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={props.onDismiss}>Close</Button>
    </Modal.Footer>
  </Modal>
);