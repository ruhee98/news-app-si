import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import NYTArticle  from './nytArticle';
import HeaderWithProfile from '../Header/HeaderWithProfile'

const NYTNews = () => {

const [popularStories, setPopularStories] = useState([]);
const [topStories, setTopStories] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    getPopularStories();
    getTopStories();
  }, []);

const getPopularStories = async () => {
    let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPopularStories(data.results);
    setLoading(false);
}

const getTopStories = async (section) => {
  let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setTopStories(data.results);
  setLoading(false);

}

return (
    <Fragment>
        <HeaderWithProfile />
       <h5>
         Most Popular
      </h5>
      <br />
        <Row>
       {loading || !popularStories? 
        <div> loading.. </div> : (
        popularStories.slice(0,6).map(article => 
        (<Col md={4} sm={8}>
          <NYTArticle article={article} key={article.url}/>
        </Col>
        ))
        )}
        </Row>
        <br />
        <h5>
           Top Stories
        </h5>
        <Button onClick={() => {getTopStories('home')}} variant="outline-primary">All</Button>{' '}
        <Button onClick={() => {getTopStories('politics')}} variant="outline-primary" >Politics</Button>{' '}
        <Button onClick={() => {getTopStories('business')}}variant="outline-secondary">Business</Button>{' '}
        <Button onClick={() => {getTopStories('technology')}}variant="outline-secondary">Technology</Button>{' '}
        <Button onClick={() => {getTopStories('arts')}}variant="outline-warning">Arts</Button>{' '}
        <Button onClick={() => {getTopStories('world')}}variant="outline-danger">World</Button>{' '}
        
        <br />
        <br />
        <Row>
       {loading || !topStories? 
        <div> loading.. </div> : (
          topStories.slice(0,9).map(article => 
        (<Col md={4} sm={8}>
          <NYTArticle article={article} key={article.url}/>
        </Col>
        ))
        )}
        </Row>
    </Fragment>
  );
   
}

export default NYTNews;
