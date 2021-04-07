import React, {Fragment} from 'react';
import {Modal, Button} from 'react-bootstrap';

const RemoveModal = (props) => {

    return (
<Fragment>
<Modal show={props.show} onHide={props.onDismiss}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{props.body}</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="primary" onClick={props.onConfirm}>Delete</Button>
      <Button variant="secondary" onClick={props.onDismiss}>Cancel</Button>
    </Modal.Footer>
  </Modal>
</Fragment>     

    )
    
}

export default RemoveModal;