import React from 'react';
import {Card} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile';

export const ReadingList = ({article}) => {
    return (
        <div>
            <HeaderWithProfile />
            <Card>
                <Card.Body>
                <Card.Title>
                    Reading List
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.author}</Card.Subtitle>
                <Card.Text>{article.content}</Card.Text>
                <Card.Link href={article.url}></Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}