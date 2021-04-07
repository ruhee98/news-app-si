import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NewsArticle} from '../components/NewsArticle'
import {Row, Col, Spinner} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile';
import HeaderComponent from '../Header/header';
import {useAuth} from '../firebase/AuthProvider';

const HomePage = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const {currentUser} = useAuth();

  useEffect(() => {
    getLatestNews()
  }, []);
  
  const getLatestNews = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setResult(data.articles);
      setLoading(false);
  }


  return (
    <Fragment>
      {currentUser ?
            <HeaderWithProfile />
            :
            <HeaderComponent />
      }      
      <h4 className="headingPage">
        Latest News
      </h4>
      <br />
        <Row>
       {loading || !result? 
         <Spinner animation="border" variant="primary">
         <span className="sr-only">Loading...</span>
         </Spinner> 
         : 
        result.slice(0, 9).map(news => 
        (<Col md={4}>
        <NewsArticle news={news} key={news.url}/>
        </Col>
        ))
        }
      </Row>
      <br />
      <br />
     
      
        
      </Fragment>
  );
};

export default HomePage;