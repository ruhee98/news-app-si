import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import NYTArticle  from './nytArticle';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import ls from 'local-storage';
import {useGlobalContext} from './Context';
import SavedItem from './SavedItem';

const NYTNews = () => {

const [topStories, setTopStories] = useState([]);
const [popularStories, setPopularStories] = useState([]);

const [loading, setLoading] = useState(true);


  const {dispatch} = useGlobalContext();

  const getPopularStories = async () => {
    let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
    const response = await fetch(url);
    dispatch({type: 'LOADING'})
    const popularStories = await response.json();
    console.log(popularStories);
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

// const handleSaveArticleToReadLater = (article) => {
//   let currentReadLater = readLater.slice(0);
//   let newReadLater = [...currentReadLater, article];
//   if (readLater.includes(article)){
//     setReadLater(newReadLater);
//   }
//   ls.set('readLater', newReadLater);

// }

// const handleDeleteArticle = (article) => {
//   const updatedList = readLater.slice(0)
//   updatedList.splice(updatedList.indexOf(article), 1)
//   setReadLater(updatedList)
//   ls.set('readLater', updatedList)
// }

// const handleReadArticle = (art) => {
//   if (this.state.readLater.find((article) => article.title === art.title)) {
//       this.handleDeleteArticle(art)
//   }
//     const win = window.open(art.url, '_blank');
//     win.focus();
  
// }


return (
    <Fragment>
        <HeaderWithProfile />
       <h5>
         Most Popular
      </h5>
      <br />
        <Row>
       {!popularStories? 
        <div> loading.. </div> : (
          popularStories.map((article) => 
        (<Col md={4} sm={8}>
         <NYTArticle {...article} key={article.id}/>
        </Col>
        )))}
        
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
          topStories.slice(0,9).map((article) => 
        (<Col md={4} sm={8}>
          <NYTArticle {...article} key={article.id}/>
        </Col>
        ))
        )}

        </Row>
        </Row>
        </Fragment>
  );
   
}

export default NYTNews;
