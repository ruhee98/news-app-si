import React, {useState, useEffect} from 'react';
import {useGlobalContext} from './Context';
import {Card, Row, Col, Button} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import SavedItem from './SavedItem';
import {db, auth, savedItem, postId, newPostRef} from '../firebase/firebase';
import { AuthContext } from '../firebase/AuthProvider';

const SavedList = () => {
 
    // const {clearList} = useGlobalContext();

    const initialState = {
        saveLater: false,
        articles: [],
    }
    const [savedArticle, setSavedArticle] = useState(initialState)

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
                            setSavedArticle({articles: articleList, saveLater: true})
                            console.log(articleList);
                        } else {
                            setSavedArticle({articles: null, saveLater: false})
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

    const {articles} = savedArticle; 

    return (
            <div>
            <HeaderWithProfile />
            <h4 className="header">Your Saved List</h4>
            <Button className='btn clear-btn' onClick={() => clearList()}>
                Clear Reading List
            </Button>
            <Row>
            {articles ? 
                
                (articles.map((savedItem) => 
                (<Col md={4} sm={8}>
                <SavedItem {...savedItem} removeData={removeData} />
                </Col>                    
                ))) : (
                <div> There are no saved items</div>
                )
                }   
            </Row>
                       
                
            </div>
        )

    
}

export default SavedList;