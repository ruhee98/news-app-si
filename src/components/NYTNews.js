import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col, Button, Form, FormControl, Spinner, Card} from 'react-bootstrap';
import NYTArticle  from './nytArticle';
import NYTCard from './NYTCard';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import {useGlobalContext} from './Context';
import HeaderComponent from '../Header/header';
import {useAuth} from '../firebase/AuthProvider';
import ArticleSearch from './ArticleSearch';
const NYTNews = ({type}) => {



const [topStories, setTopStories] = useState([]);
const [popularStories, setPopularStories] = useState([]);
const [searchStories, setSearchStories] = useState([]);

const [loading, setLoading] = useState(true);

const {currentUser} = useAuth();

const onFormSubmit = (e) => {
  e.preventDefault();
  searchAllStories()
  console.log('Searching NY Times');
}

const onSearch = (e) => {
  setSearchStories({query : e.target.value})
  console.log("The value is", searchStories);
}

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
    getAllTopStories()
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

const getAllTopStories = async () => {
  let url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setLoading(false);
  setTopStories(data.results);
}

const searchAllStories = () => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchStories.query}&api-key=${process.env.REACT_APP_API_KEY_NYT_NEWS}`;
  fetch(url).then(
    (res) => res.json()).then(data =>{ 
      if(!data.errors){
        setSearchStories(data.response.docs);
      } else {
        setSearchStories([])
      }
      console.log(data)
      // setSearchStories(data.response.docs);
      // const headline= data.response.docs[0].headline.main;
      // const byline =  data.response.docs[0].byline.original;
      // const headlineUrl= data.response.docs[0].web_url;
      // const headlinesAbstract= data.response.docs[0].abstract;
      // setLoading(false);

      // setSearchStories({
      //   query: "" ,
      //   firstNewsHeadline: ' ' + headline,
      //   firstNewsUrl:' '+ headlineUrl,
      //   firstNewsAbstract: '' + headlinesAbstract,
      //   byline: ' ' + byline,
      //   });

    }) 

}
     
return (
    <Fragment>
        {currentUser ?
            <HeaderWithProfile />
            :
            <HeaderComponent />
            }
        <br />
        <Row className="mt-2">
        <h5 className="headingPage">
         Most Popular
         </h5>
        <Col className="d-flex flex-row-reverse">
        <Form inline>
        <input type="text" placeholder="Search" 
        value={searchStories.query}
        onChange={onSearch.bind(this)}
        className="mr-sm-2" />
        <Button variant="outline-success" type="submit" 
        onClick={onFormSubmit.bind(this)}>Search</Button>
        </Form>
         </Col>
        </Row>
     
        <Row className="mt-4">
        {searchStories.length > 0 && 
          (searchStories.map((search) => 
            (<Col md={4} sm={8}>
            <ArticleSearch search={search}/>  
            </Col>
          )))
        }
        </Row>
     
        <Row className="mt-4">
       {!popularStories? 
        <Spinner animation="border" variant="success" >
        <span className="sr-only">Loading...</span>
       </Spinner> : (
          popularStories.slice(0,6).map((article) => 
        (<Col md={4} sm={8}>
          <NYTCard article={article} key={article.id}/>
        </Col>
        )))}
        </Row>

        <br />
        <h5 className="headingPage">
           Top Stories
        </h5>
        
        <Row>
        <h7 className="headingPage">
           All
        </h7>
        <Col> 
        <Button onClick={() => {getTopStories('politics')}}  variant="outline-secondary mr-3">Politics</Button>
        <Button onClick={() => {getTopStories('business')}} variant="outline-secondary mr-3">Business</Button>
        <Button onClick={() => {getTopStories('technology')}}variant="outline-secondary mr-3">Technology</Button>
        <Button onClick={() => {getTopStories('arts')}}variant="outline-warning mr-3">Arts</Button>
        <Button onClick={() => {getTopStories('world')}}variant="outline-danger mr-3">World</Button>{' '}
        </Col>
        </Row>
       
       {loading || !topStories ?
<Spinner animation="border" variant="success">
<span className="sr-only">Loading...</span>
</Spinner>
       :
      
       topStories.slice(0,21).map((NYTarticle) => 
        (
          <NYTArticle NYTarticle={NYTarticle} key={NYTarticle.id}/>
        ))
      }
      
      
        </Fragment>
  );
   
}

export default NYTNews;
