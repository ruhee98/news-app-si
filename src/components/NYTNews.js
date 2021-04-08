import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col, Button, Spinner} from 'react-bootstrap';
import NYTArticle  from './nytArticle';
import NYTCard from './NYTCard';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import {useGlobalContext} from './Context';
import HeaderComponent from '../Header/header';
import {useAuth} from '../firebase/AuthProvider';

const NYTNews = () => {

const [topStories, setTopStories] = useState([]);
const [popularStories, setPopularStories] = useState([]);

const [loading, setLoading] = useState(true);

const {currentUser} = useAuth();

const getPopularStories = async () => {
    let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
    const response = await fetch(url);
    const popularStories = await response.json();
    console.log(popularStories);
    setLoading(false);
    setPopularStories(popularStories.results);
}

useEffect(() => {
    getPopularStories()
    getTopStories()
},[])

const getTopStories = async (section) => {
  let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setLoading(false);
  setTopStories(data.results);
}
     
return (
    <Fragment>
        {currentUser ?
            <HeaderWithProfile />
            :
            <HeaderComponent />
            }
       <h5 className="headingPage">
         Most Popular
      </h5>
      <br />
        <Row>
       {!popularStories? 
        <Spinner animation="border" variant="success" >
        <span className="sr-only">Loading...</span>
       </Spinner> : (
          popularStories.slice(0,6).map((article) => 
        (<Col md={4} sm={8}>
         <NYTCard {...article} key={article.id}/>
        </Col>
        )))}
        </Row>

        <br />
        <h5 className="headingPage">
           Top Stories
        </h5>
        <br />
        <Button onClick={() => {getTopStories('home')}} variant="outline-primary">All</Button>{' '}
        <Button onClick={() => {getTopStories('politics')}} variant="outline-primary" >Politics</Button>{' '}
        <Button onClick={() => {getTopStories('business')}}variant="outline-secondary">Business</Button>{' '}
        <Button onClick={() => {getTopStories('technology')}}variant="outline-secondary">Technology</Button>{' '}
        <Button onClick={() => {getTopStories('arts')}}variant="outline-warning">Arts</Button>{' '}
        <Button onClick={() => {getTopStories('world')}}variant="outline-danger">World</Button>{' '}
      
       {loading || !topStories ?
<Spinner animation="border" variant="success">
<span className="sr-only">Loading...</span>
</Spinner>
       :
      
       topStories.slice(0,12).map((article) => 
        (
          <NYTArticle {...article} key={article.id}/>
        ))
      }
        </Fragment>
  );
   
}

export default NYTNews;
