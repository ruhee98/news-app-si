import React, {useState, Fragment} from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import RemoveModal from './RemoveModal';
const SavedItem = ({title, byline, abstract, url, articleId, uid, img, removeData}) => {

  const [showModal, setShowModal] = useState(false);
  
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


    const onConfirm = () => {
      removeData(articleId)
      handleClose();
    };

    const handleDelete = (event) => {
        event.preventDefault();
        handleShow()   
    }

  
    return (

        <div>
            <Fragment>
      <Row className='mt-3'>
        <Col sm={4}>
        <Card style={{ width: '20rem' }}>
          {img &&
          <Card.Img variant="top" src={img}/> 
          }
  <Card.Body>
    <Card.Title><Card.Link href={url}>{title}</Card.Link>
</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{byline}</Card.Subtitle>
    <Card.Text>{abstract}</Card.Text>
    <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
    </svg>
      Delete
    </button>
    <RemoveModal 
      show={showModal}
      title={'Delete'}
      body={'Are you sure you want to delete permanently?'}
      onConfirm={onConfirm}
      onDismiss={handleClose}
    />
  </Card.Body>  
    </Card>
        </Col>
      </Row>
     </Fragment>
        </div>
    )
}

export default SavedItem;