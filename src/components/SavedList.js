import React, {useState, useEffect} from 'react';
import {useGlobalContext} from './Context';
import {Card, Row, Col, Button} from 'react-bootstrap';
import HeaderWithProfile from '../Header/HeaderWithProfile'
import SavedItem from './SavedItem';
import firebase from 'firebase';

const SavedList = ({toggleToSave}) => {
 
    const {clearList} = useGlobalContext();

    const initialState = {
        saveLater: false,
        savedArticle: [],
    }
    const [savedArticle, setSavedArticle] = useState(initialState)

    if (savedArticle.length === 0){
        <header>
        <h3>Your Saved List</h3>
        <h4>is currently empty</h4>
    </header>

    }

    useEffect(() => {
        setSavedArticle({saveLater : true})
        var uid = firebase.auth().currentUser.uid;
        firebase.database.ref(`savedArticles${uid}`).on('value', snapshot => {
            snapshot.forEach(snap => {
                savedArticle.push(snap.val());
            })
            setSavedArticle({saveLater: true, savedArticle: savedArticle})
        })  
    }, [])

    return (
        <div>
        <HeaderWithProfile />
        <header>
            <h3>Your Saved List</h3>
        </header>
        <div>
            {savedArticle.map((savedArticle) => {
                return <SavedItem key={savedArticle.uid} savedArticle={savedArticle} />
            })}
        </div>
        <button className='btn clear-btn'
        onClick={clearList}>
            Clear Reading List
        </button>

        </div>
    )
}

export default SavedList;