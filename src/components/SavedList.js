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
            if(uid){
                uid = auth.currentUser.uid;
                // var savedArticles = db.ref(`saved/${uid}`);
                savedItem(uid).orderByChild('title').on("value",  (snap) => {
                    const articleObject = snap.val();
                    if (articleObject) {
                        const articleList = Object.keys(articleObject).map(key => ({
                            ...articleObject[key],
                            uid: key,
                        }))
                        setSavedArticle({articles: articleList, saveLater: true})
                    } else {
                        setSavedArticle({articles: null, saveLater: false})
                    }
                })
                 return () =>
                savedItem(uid).off();
            } else {
                console.log('No user is signed in');
            }
        })
        
        
    },[])

    const removeData = (uid, postId) => {
        uid = auth.currentUser.uid;
        postId = newPostRef.key;
        savedItem(uid).child(`${postId}`).remove().then(function() {
            console.log("Remove succeeded.")
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message)
          });
    };

    const {articles} = savedArticle; 

    return (
            <div>
            <HeaderWithProfile />
            <header>
                <h3>Your Saved List</h3>
            </header>
            <AuthContext.Consumer>
                {currentUser => (
                    <div>
                        <div>
                {articles ? 
                (articles.map((savedItem) => {
                        return <SavedItem key={savedItem.uid} {...savedItem} removeData={removeData} />
                })) : (
                <div> There are no saved items</div>
                )
               }
                        </div>
            {/* <button className='btn clear-btn' onClick={clearList}>
                Clear Reading List
            </button> */}
                    </div>
                )}
          
            </AuthContext.Consumer>
            </div>
        )

    
}

export default SavedList;