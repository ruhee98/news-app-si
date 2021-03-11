import React, {Fragment} from 'react';
import {Card} from 'react-bootstrap';

export function NewsArticle({news}){
    return(  
    <Fragment>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={news.urlToImage}/> 
  <Card.Body>
    <Card.Title>{news.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{news.author}</Card.Subtitle>
    <Card.Text>{news.content}</Card.Text>
    <Card.Link href={news.url}>Go to News</Card.Link>
  </Card.Body>
</Card>
</Fragment>
    ) 
    
}

