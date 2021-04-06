import React, {Fragment} from 'react';
import {useGlobalContext} from './Context';
import {savedItem, postId} from '../firebase/firebase';
import SavedList from './SavedList';
import {Card, Row, Col, Button} from 'react-bootstrap';
const SavedItem = ({title, byline, abstract, url, key, uid, img, img2, removeData}) => {

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
    <Button className='remove-btn' onClick={() => removeData()}>
            Remove
    </Button>
  </Card.Body>  
    </Card>
        </Col>
      </Row>
     </Fragment>
        </div>
    )
}

export default SavedItem;