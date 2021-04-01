import React, {Fragment, useState, useEffect} from 'react';
import {NewsByCategory} from './NewsByCategory';
import {Button, Row, Col} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'


export const Categories = () => {
    const [topics, setTopics] = useState("");
    const [loading, setLoading] = useState(true);
    const [categories, setNewsByCategory] = useState([]);
    
    useEffect(() => {
        getNewsByCategory();
      }, []);

      const getNewsByCategory = async (sources) => {
        let url = `https://newsapi.org/v2/everything?domains=${sources}&language=en&apiKey=3dbf4804a7314e538a44f7116e934965`;
        const response = await fetch(url);
        const data = await response.json();
        setNewsByCategory(data.articles);
        setLoading(false);
    
    }
    

    return (
        <div>
            <HeaderWithProfile />
            <header>Sources: </header>
            <Button onClick={() => {getNewsByCategory('npr.org')}}variant="outline-secondary">NPR</Button>{' '}
            <Button onClick={() => {getNewsByCategory('bbc.com')}}variant="outline-secondary">BBC</Button>{' '}
            <Button onClick={() => {getNewsByCategory('cnn.com')}}variant="outline-secondary">CNN</Button>{' '}
            <Button onClick={() => {getNewsByCategory('vox.com')}}variant="outline-secondary">VOX</Button>{' '}
   <br />
   <Row>
    {loading || !categories? 
    <div> loading.. </div> : 
    categories.slice(0,6).map(news => 
    (<Col md={4}>
    <NewsByCategory news={news} key={news.url} />
    </Col>
    ))}
    </Row>

        </div>
    )
}

