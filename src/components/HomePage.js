import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NewsArticle} from '../components/NewsArticle'
import {Row, Col} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile';
const HomePage = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestNews();
  }, []);
  
  const getLatestNews = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(process.env);
      setResult(data.articles);
      setLoading(false);
  }

  return (
    <Fragment>
      <HeaderWithProfile />
      <h4>
        Latest News
      </h4>
        <Row>
       {loading || !result? 
        <div> loading.. </div> : 
        result.map(news => 
        (<Col md={4}>
        <NewsArticle news={news} key={news.url} />
        </Col>
        ))}
      </Row>
      <br />
      <br />
     
      
        
      </Fragment>
  );
};

export default HomePage;