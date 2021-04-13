import React, {useState, useContext, useEffect} from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import SavedItem from './SavedItem';
import {db, auth, savedItem, postId, newPostRef} from '../firebase/firebase';
import { AuthContext } from '../firebase/AuthProvider';
import { AppProvider, GlobalContext } from "./Context";
import Save from "./Save";

const SavedList = ({article}) => {

    // const {savedList} = useContext(GlobalContext);
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
            <h4 className="header">Your Saved List</h4>
            <Button className='btn clear-btn' onClick={() => clearList()}>
                Clear Reading List
            </Button>
            <Row>
            {savedList ?
                (savedList.map((article) => 
                (<Col md={4} sm={8}>
                <SavedItem {...article} removeData={removeData} />
                </Col>                    
                ))) 
                : (
                <h4 className="header"> There are no saved items</h4>
                )
            } 
            </Row>
                       
                
            </div>
        )

    
}

export default SavedList;