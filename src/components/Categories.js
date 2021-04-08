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
            <Row className="mt-3">
            <h4>News by Sources </h4>
            </Row>

            <Row className='mt-3'>
            <h5>General: </h5>
            <Col className='ml-2'>
            <Button className="button" onClick={() => {getNewsByCategory('bbc.com')}}variant="outline-danger">BBC</Button>{' '}
            <Button onClick={() => {getNewsByCategory('cnn.com')}}variant="outline-danger">CNN</Button>{' '}
            <Button onClick={() => {getNewsByCategory('npr.org')}}variant="outline-danger">NPR</Button>{' '}
            <Button onClick={() => {getNewsByCategory('vox.com')}}variant="outline-danger">Vox</Button>{' '}
            <Button onClick={() => {getNewsByCategory('aljazeera.com')}}variant="outline-danger">Aljazeera</Button>{' '}
            <Button onClick={() => {getNewsByCategory('cbsnews.com')}}variant="outline-danger">CBS</Button>{' '}
            <Button onClick={() => {getNewsByCategory('politico.com')}}variant="outline-danger">Politico</Button>{' '}
                </Col>
            </Row>
            <Row className="mt-2">
                <h5>
                Technology:
                </h5>
            <Col className="ml-2">
            <Button onClick={() => {getNewsByCategory('wired.com')}}variant="outline-info">Wired</Button>{' '}
            <Button onClick={() => {getNewsByCategory('thenextweb.com')}}variant="outline-info">The Next Web</Button>{' '}
            <Button onClick={() => {getNewsByCategory('techradar.com')}}variant="outline-info">Tech Radar</Button>{' '}
            <Button onClick={() => {getNewsByCategory('technologyreview.com')}}variant="outline-info">MIT Technology Review</Button>{' '}
            </Col>
            </Row>
            <Row className="mt-3">
            <h5>Business: </h5>
            <Col className="ml-2">
            <Button onClick={() => {getNewsByCategory('wsj.com')}}variant="outline-success">WSJ</Button>{' '}
            <Button onClick={() => {getNewsByCategory('bloomberg.com')}}variant="outline-success">Bloomberg</Button>{' '}
            <Button onClick={() => {getNewsByCategory('businessinsider.com')}}variant="outline-success">Business Insider</Button>{' '}
            </Col>
            </Row>
            
            <Row className='mt-3'>
            <h5>Entertainment:  </h5>
                <Col className='ml-2'>
            <Button onClick={() => {getNewsByCategory('pitchfork.com')}}variant="outline-warning">Pitchfork</Button>{' '}
            <Button onClick={() => {getNewsByCategory('polygon.com')}}variant="outline-warning">Polygon</Button>{' '}
                </Col>
            </Row>
           
   <Row className='mt-5'>
    {loading || !categories? 
      <Spinner animation="border" variant="success" >
         <span className="sr-only">Loading...</span>
        </Spinner>
        : 
    categories.slice(0,18).map(news => 
    (<Col md={4}>
    <NewsByCategory news={news} key={news.url} />
    </Col>
    ))}
    </Row>

        </Fragment>
    )
}

