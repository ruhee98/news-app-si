import React, {useState, Fragment} from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import RemoveModal from './RemoveModal';
const SavedItem = ({title, byline, abstract, url, articleId, uid, img, removeData}) => {

  const [showModal, setShowModal] = useState(false);
  
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


    const onConfirm = () => {
      removeData(uid, articleId)
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
    <Button className='remove-btn' onClick={handleDelete}>
      Remove
    </Button>
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