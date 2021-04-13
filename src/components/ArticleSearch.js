import React, {Fragment, useState, useContext} from 'react';
import {Row, Card, Col, Button} from 'react-bootstrap';
import './styles.css';
import * as moment from 'moment';
import {auth, savedItem, postId} from '../firebase/firebase';
import {useAuth} from '../firebase/AuthProvider';
import { GlobalProvider, GlobalContext } from "./Context";
import Save from "./Save";

const ArticleSearch = ({search}) => {


    return(  
            <Fragment>
                <Row className='mt-3'>
                    <Col sm={4}>
                    <Card className="card" style={{ width: '21rem' }}>
                 
                 {search.media &&
                    <Card.Img className="image" variant="top" 
                    src={search?.media?.[0]?.['media-metadata'][2]?.url?
                     `https://nyt.com/${search.media[0]['media-metadata'][2].url}` : 
                     'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                     } alt="news-img"/> 
                 }
    <Card.Body>
<Card.Link href={search.web_url}>{search.headline.main}</Card.Link>
 <Card.Subtitle className="subheading">
   {search.byline.original} • {moment(search.published_date).format('LL')}</Card.Subtitle>
   <Card.Subtitle className="abstract">
        {search.abstract}
        </Card.Subtitle></Card.Body>
</Card>
</Col>
</Row>
</Fragment> 
    ) 
    
}

export default ArticleSearch;


