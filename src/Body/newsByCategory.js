import React from 'react';
import {Card, Button} from 'react-bootstrap';

export const NewsByCategory = ({news}) => {
    return (
        <Card>
        <Card.Img variant="top" src={news.urlToImage}/> 

        <Card.Body>
    <Card.Title>{news.title}</Card.Title>
    <Card.Text>
      {news.description}
    </Card.Text>
    <Card.Link href={news.url}>{news.source.name}</Card.Link>
  </Card.Body>
</Card>
    )
}