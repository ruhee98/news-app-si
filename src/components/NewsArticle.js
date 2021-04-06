import React, {Fragment, useState} from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import {auth, savedItem} from '../firebase/firebase';
import './styles.css';
import * as moment from 'moment';

export function NewsArticle({news}){

  const[saveLater, setSaveLater] = useState(false);
  const [saveText, setSaveText] = useState("Save");

  const toggleToSave = () => {
    setSaveLater(!saveLater)
    const uid = auth.currentUser.uid;
    console.log(uid);
    var newPostRef = savedItem(uid).push();
    var key = newPostRef.key;
    console.log(key);
    newPostRef.set({
      title: news.title,
      byline: news.author,
      abstract : news.content,
      url : news.url,
      img: news.urlToImage || null,
      articleID: key,
    });
    setSaveText("Saved");
  }

    return(  
    <Fragment>
      <Row className='mt-5'>
        <Col sm={4}>
        <Card style={{ width: '20rem'}}>
      <Card.Img className="image" variant="top" src={news.urlToImage}/> 
  <Card.Body>
    <Card.Title className="heading">
    <Card.Link className="heading" href={news.url}>{news.title}</Card.Link>
      </Card.Title>
    <Card.Subtitle className="subheading">{news.source.name} • {moment(news.publishedAt).format('LL')}</Card.Subtitle>
    {/* <Card.Text className="subheading">{news.content}</Card.Text> */}
    {/* <Card.Link href={news.url}>Read More</Card.Link> */}
    {' '}
    </Card.Body>
    <Button variant="dark" className="readLater" onClick={toggleToSave} >
  {saveLater ? (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    </svg> 
  ):(
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>
  )}
  {saveText}
  </Button>
  
  
 
  {/* <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small>
      <i class="bi bi-bookmark"></i> */}
    {/* </Card.Footer> */} 
    </Card>
        </Col>
      </Row>
     </Fragment>
    ) 
    
}

