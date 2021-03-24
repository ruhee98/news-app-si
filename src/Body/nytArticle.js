import React, {Fragment} from 'react';
import {Row, Card, Col, Button} from 'react-bootstrap';


const NYTArticle = ({article}) => {
    return(  
            <Fragment>
                <Row>
                    <Col sm={4}>
                    <Card style={{ width: '20rem' }}>
            <Card.Body>
 <Card.Title>{article.title}</Card.Title>
 <Card.Subtitle className="mb-2 text-muted">{article.byline}</Card.Subtitle>
 <Card.Text>{article.abstract}</Card.Text>
 <Card.Link href={article.url}>Read More</Card.Link>{' '}
 <Button class="btn btn-success"> 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
</Button>
</Card.Body>
</Card>
</Col>
</Row>
       
</Fragment> 
    ) 
    
}

export default NYTArticle;


