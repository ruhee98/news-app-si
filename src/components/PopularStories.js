import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import NYTArticle  from './nytArticle';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import {useGlobalContext} from './Context';
import firebase from 'firebase';

const NYTNews = ({id, title, byline, url, abstract}) => {

const [topStories, setTopStories] = useState([]);
const [popularStories, setPopularStories] = useState([]);
// const [savedArticle, setSavedArticle] = useState({
//     articles: []
// });

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

// function saveArticle(){
//   var uid = firebase.auth().currentUser.uid;
//   var postListRef = firebase.database().ref(`savedArticles/${uid}`);
//   var newPostRef = postListRef.push();
//   newPostRef.set({
//     uid,
//     title: title,
//     byline: byline,
//     abstract : abstract,
//     url : url,
//     saveLater : true,
//   }).once("value")
//   .then(
//     setSavedArticle({
//     title: snapshot.val().title})
//   );
// }

     
return (
    <Fragment>
        <HeaderWithProfile />
        {/* Saved List */}
        {/* <SavedItem key={article.id} /> */}
       <h5>
         Most Popular
      </h5>
      <br />
        <Row>
       {!popularStories? 
        <div> loading.. </div> : (
          popularStories.slice(0,6).map((article) => 
        (<Col md={4} sm={8}>
         <NYTArticle {...article} key={article.id}/>
        </Col>
        )))}
        </Row>

        <br />
        <h5>
           Top Stories
        </h5>
        <br />
        <Button onClick={() => {getTopStories('home')}} variant="outline-primary">All</Button>{' '}
        <Button onClick={() => {getTopStories('politics')}} variant="outline-primary" >Politics</Button>{' '}
        <Button onClick={() => {getTopStories('business')}}variant="outline-secondary">Business</Button>{' '}
        <Button onClick={() => {getTopStories('technology')}}variant="outline-secondary">Technology</Button>{' '}
        <Button onClick={() => {getTopStories('arts')}}variant="outline-warning">Arts</Button>{' '}
        <Button onClick={() => {getTopStories('world')}}variant="outline-danger">World</Button>{' '}
        <Row>

       {topStories.slice(0,9).map((article) => 
        (<Col md={4} sm={8}>
          <NYTArticle {...article} key={article.id}/>
        </Col>
        ))
      }
        </Row>
        </Fragment>
  );
   
}

export default NYTNews;
