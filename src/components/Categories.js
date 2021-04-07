import React, {Fragment, useState, useEffect} from 'react';
import {NewsByCategory} from './NewsByCategory';
import {Button, Row, Col, Spinner} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import HeaderComponent from '../Header/header';
import {useAuth} from '../firebase/AuthProvider';


export const Categories = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setNewsByCategory] = useState([]);
    const {currentUser} = useAuth();


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
        <Fragment>
            {currentUser ?
            <HeaderWithProfile />
            :
            <HeaderComponent />
            }
            <Row className="mt-1">
            <h5 className="headingPage">News by Sources </h5>
            </Row>

            <Row className="mt-1">
                <h5>
                Technology:
                </h5>
            <Col className="ml-2">
            <Button onClick={() => {getNewsByCategory('wired.com')}}variant="outline-secondary">Wired</Button>{' '}
            <Button onClick={() => {getNewsByCategory('thenextweb.com')}}variant="outline-secondary">The Next Web</Button>{' '}
            <Button onClick={() => {getNewsByCategory('techradar.com')}}variant="outline-secondary">Tech Radar</Button>{' '}
            <Button onClick={() => {getNewsByCategory('technologyreview.com')}}variant="outline-secondary">MIT Technology Review</Button>{' '}
            <Button onClick={() => {getNewsByCategory('vox.com')}}variant="outline-secondary">VOX</Button>{' '}
            </Col>
            </Row>
            <Row className="mt-3">
            <h5>Business: </h5>
            <Col className="ml-2">
            <Button onClick={() => {getNewsByCategory('wsj.com')}}variant="outline-secondary">WSJ</Button>{' '}
            <Button onClick={() => {getNewsByCategory('bloomberg.com')}}variant="outline-secondary">Bloomberg</Button>{' '}
            <Button onClick={() => {getNewsByCategory('businessinsider.com')}}variant="outline-secondary">Business Insider</Button>{' '}
            </Col>
            </Row>
            
           
            <Row className='mt-3'>
            <h5>Entertainment:  </h5>
                <Col className='ml-2'>
            <Button onClick={() => {getNewsByCategory('pitchfork.com')}}variant="outline-secondary">Pitchfork</Button>{' '}
            <Button onClick={() => {getNewsByCategory('polygon.com')}}variant="outline-secondary">Polygon</Button>{' '}
                </Col>
            </Row>
           

            <Row className='mt-3'>
            <h5>General: </h5>
            <Col className='ml-2'>
            <Button onClick={() => {getNewsByCategory('bbc.com')}}variant="outline-secondary">BBC</Button>{' '}
            <Button onClick={() => {getNewsByCategory('cnn.com')}}variant="outline-secondary">CNN</Button>{' '}
            <Button onClick={() => {getNewsByCategory('npr.org')}}variant="outline-secondary">NPR</Button>{' '}
            <Button onClick={() => {getNewsByCategory('aljazeera.com')}}variant="outline-secondary">Aljazeera</Button>{' '}
            <Button onClick={() => {getNewsByCategory('cbsnews.com')}}variant="outline-secondary">CBS</Button>{' '}
            <Button onClick={() => {getNewsByCategory('politico.com')}}variant="outline-secondary">Politico</Button>{' '}
                </Col>
            </Row>
   <Row className='mt-5'>
    {loading || !categories? 
      <Spinner animation="border" variant="success" >
         <span className="sr-only">Loading...</span>
        </Spinner>
        : 
    categories.slice(0,9).map(news => 
    (<Col md={4}>
    <NewsByCategory news={news} key={news.url} />
    </Col>
    ))}
    </Row>

        </Fragment>
    )
}

