import React, {Fragment} from 'react';
import {Card, Col, Row} from 'react-bootstrap';

export function NewsArticle({news}){
    return(  
    <Fragment>
      <Row>
        <Col sm={4}>
        <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={news.urlToImage}/> 
  <Card.Body>
    <Card.Title>{news.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{news.author}</Card.Subtitle>
    <Card.Text>{news.content}</Card.Text>
    <Card.Link href={news.url}></Card.Link>
  </Card.Body>  
  <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <i class="bi bi-bookmark"></i>
    </Card.Footer>
    </Card>
        </Col>
      </Row>
     </Fragment>
    ) 
    
}

