import React, {Fragment} from 'react';
import {useGlobalContext} from './Context';
import {withFirebase} from '../firebase/firebase';
import SavedList from './SavedList';
import {Card, Row, Col, Button} from 'react-bootstrap';
const SavedItem = ({title, byline, abstract, url}) => {

    const {remove} = useGlobalContext();
    return (
        <div>
            <Fragment>
      <Row>
        <Col sm={4}>
        <Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{byline}</Card.Subtitle>
    <Card.Text>{abstract}</Card.Text>
    <Card.Link href={url}>Read More</Card.Link>
    <Button className='remove-btn' onClick={() => remove()}>
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