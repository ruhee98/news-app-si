import './App.css';
import React, {Fragment, useState, useEffect} from 'react';
import HeaderComponent from './Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopStories} from './Body/TopStories';
import {Container, Row, Col} from 'react-bootstrap';
function App() {

  // const [result, setResult] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getLatestNews();
  // }, []);
  
  // const getLatestNews = async () =>{
  //     let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3dbf4804a7314e538a44f7116e934965';
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setResult(data.articles);
  //     setLoading(false);
  // }

  // return (
  //   <Fragment>
  //    <HeaderComponent />
  //     <Container>
  //       <Row>
  //      {loading || !result? 
  //       <div> loading.. </div> : 
  //       result.map(news => 
  //       (<Col sm={4}>
  //       <TopStories news={news} key={news.url} />
  //       </Col>
  //       ))}
  //     </Row>
  //     </Container>
  //     </Fragment>
  // );
}

export default App;
