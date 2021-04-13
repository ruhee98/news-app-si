import React, {Fragment, useState} from 'react';
import {Row, Card, Col, Button} from 'react-bootstrap';
import './styles.css';
import * as moment from 'moment';
import {auth, savedItem} from '../firebase/firebase';
import {useAuth} from '../firebase/AuthProvider';

const NYTArticle = ({NYTarticle, id, title, byline, url, media, multimedia, abstract, published_date}) => {

  const[saveLater, setSaveLater] = useState(false);
  const {currentUser} = useAuth();
  
  const toggleToSave = () => {
    setSaveLater(!saveLater)
    if(currentUser) {
      const uid = auth.currentUser.uid;
      var newPostRef = savedItem(uid).push();
      var key = newPostRef.key;
      newPostRef.set({
        title: NYTarticle.title,
        byline: NYTarticle.byline,
        abstract : NYTarticle.abstract,
        url : NYTarticle.url,
        img: NYTarticle.multimedia[0].url || null,
        publishedDate : NYTarticle.published_date,
        articleId: key,
      }); 
    } else {
      alert("Please sign up for saving bookmarks")
    }
    
  }

    return(  
            <Fragment>
                <Row className='mt-3'>
                    <Col sm={4}>
                    <Card style={{ width: '55rem' }}>
                      <div className="card-horizontal">
                      {NYTarticle.multimedia &&
                <Card.Img className="image" style={{ width: '210px', height: '150px'}} src={NYTarticle.multimedia[3].url }/>
                }
    <Card.Body>
 <Card.Link className="heading" href={NYTarticle.url}>{NYTarticle.title}</Card.Link>
 <Card.Subtitle className="subheading">
   {NYTarticle.byline} • {moment(published_date).format('LL')}</Card.Subtitle>
 <Card.Text className="abstract">{NYTarticle.abstract}</Card.Text>
</Card.Body>
<Card.Footer>
 <Button variant="transparent" className="readLater" onClick={toggleToSave} >
  {saveLater ? (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>
  )}
</Button> 
 </Card.Footer>
                      </div>
                      </Card>
       </Col>
</Row>
</Fragment> 
    ) 
    
}

export default NYTArticle;


