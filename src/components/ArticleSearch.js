import React, {Fragment, useState} from 'react';
import {Row, Card, Col, Button} from 'react-bootstrap';
import './styles.css';
import * as moment from 'moment';
import {auth, savedItem} from '../firebase/firebase';
import {useAuth} from '../firebase/AuthProvider';

const ArticleSearch = ({search}) => {

const[saveLater, setSaveLater] = useState(false);
  const {currentUser} = useAuth();

  
  const toggleToSave = () => {
    setSaveLater(!saveLater)
    if(currentUser) {
      const uid = auth.currentUser.uid;
      var newPostRef = savedItem(uid).push();
      var key = newPostRef.key;
      newPostRef.set({
        title: search.headline.main,
        byline: search.byline.original,
        abstract : search.abstract,
        url : search.web_url,
        img: search.multimedia[0].url || null,
        articleId: key,
      }); 
    } else {
        alert("Please Sign up or login for Saving Bookmarks!")
    }
    
  }


    return(  
            <Fragment>
                <Row className='mt-3'>
                    <Col sm={4}>
                    <Card className="card" style={{ width: '21rem' }}>
                    <Card.Body>
<Card.Link className="heading" href={search.web_url}>{search.headline.main}</Card.Link>
 <Card.Subtitle className="subheading">
   {search.byline.original} • {moment(search.published_date).format('LL')}</Card.Subtitle>
   <Card.Subtitle className="abstract">
        {search.abstract}
        </Card.Subtitle>
        </Card.Body>
        <Button variant="dark" onClick={toggleToSave}>
        {saveLater ? 
      (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
      </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg>
       )}
        Save
        </Button> 
</Card>
</Col>
</Row>
</Fragment> 
    ) 
    
}

export default ArticleSearch;


