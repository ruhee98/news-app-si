import React, {useState, useEffect} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import SavedItem from './SavedItem';
import {auth, savedItem} from '../firebase/firebase';

const SavedList = ({article}) => {

    const [savedArticle, setSavedArticle] = useState([])

    useEffect(() => {
            auth.onAuthStateChanged(function(uid){ 
                uid = auth.currentUser.uid;
                savedItem(uid).on("value", (snap) => {
                    const articleObject = snap.val();
                if (articleObject) {
                const articleList = Object.keys(articleObject).map(articleId => ({
                    ...articleObject[articleId],
                    uid: articleId,
                }))                
                setSavedArticle({savedList: articleList}) 
                console.log(articleList);      
                } else {
                setSavedArticle({savedList: null})
                }
                })
                 return () =>
                savedItem(uid).off();
        })
        
    },[])

    const removeData = (articleId) => {
        const uid = auth.currentUser.uid;
        savedItem(uid).child(articleId).remove().then(function() {
            console.log("Remove succeeded.")
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message)
          });
    };

    const clearList = () => {
        const uid = auth.currentUser.uid;
        savedItem(uid).remove().then(function() {
            console.log("Cleared List!")
        }).catch(function(error){
            console.log("Cleared" + error.message)
        });
    }

    const {savedList} = savedArticle; 

    return (
            <div>
            <HeaderWithProfile />
            <br />
            <Row className="mt-2">
            <h4 className="headingPage">Your Saved Articles</h4>
            <Col className="d-flex flex-row-reverse">
            <Button className='btn clear-btn' variant="dark" onClick={() => clearList()}>
                Clear your List
            </Button>
            </Col>
            </Row>
            <Row>
            {savedList ?
                (savedList.map((article) => 
                (<Col md={4} sm={8}>
                <SavedItem {...article} removeData={removeData} />
                </Col>                    
                ))) 
                : (
                <h7 className="categories-heading"> There are no articles to read on your list.</h7>
                )
            } 
            </Row>
                       
                
            </div>
        )

    
}

export default SavedList;