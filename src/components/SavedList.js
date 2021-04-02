import React, {useState, useEffect} from 'react';
import {useGlobalContext} from './Context';
import {Card, Row, Col, Button} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import SavedItem from './SavedItem';
import {db, auth} from '../firebase/firebase';
import firebase from 'firebase';

const SavedList = ({savedArticles}) => {
 
    const {clearList} = useGlobalContext();

    const initialState = {
        saveLater: false,
        articles: [],
    }
    const [savedArticle, setSavedArticle] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        // var uid = firebase.auth().currentUser.uid;
        // firebase.database.ref(`savedArticles${uid}`).on('value', snapshot => {
        //     snapshot.forEach(snap => {
        //         savedArticle.push(snap.val());
        //     })
        auth.onAuthStateChanged(function(uid){
            if(uid){
                uid = auth.currentUser.uid;
                var savedArticles = db.ref(`saved/${uid}`);
                savedArticles.on("value",  (snap) => {
                    const articleObject = snap.val();
                    if (articleObject) {
                        const articleList = Object.keys(articleObject).map(key => ({
                            ...articleObject[key],
                            uid: key,
                        }))
                        setSavedArticle({articles: articleList, saveLater: true})
                    } else {
                        setSavedArticle({saveLater: false})
                    }
                })
                 return () =>
                savedArticles.off();
            } else {
                console.log('No user is signed in');
            }
        })
        
        
    }, [])

    const {articles} = savedArticle; 

    return (
            <div>
            <HeaderWithProfile />
            <header>
                <h3>Your Saved List</h3>
            </header>
            <div>
                {articles ? 
                (articles.map((savedItem) => {
                        return <SavedItem key={savedItem.url} {...savedItem} />
                })) : (
                <div> There are no saved items</div>
                )
               }
            </div>
            <button className='btn clear-btn' onClick={clearList}>
                Clear Reading List
            </button>
    
            </div>
        )

    
}

export default SavedList;