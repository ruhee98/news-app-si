import React, {useState, useContext, useReducer, useEffect} from 'react';
import {data} from '../apis/apis';
import reducer from './reducer';
import firebase from 'firebase';
import SavedList from './SavedList';

const AppContext = React.createContext();

const initialState = {
    loading: false,
}

const AppProvider = ({children, title, byline, abstract, url}) => {
    const[saveLater, setSaveLater] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleToSave = () => {
        setSaveLater(!saveLater);
        dispatch({type : 'DISPLAY_ITEMS'})
        var uid = firebase.auth().currentUser.uid;
        var postListRef = firebase.database().ref(`savedArticles/${uid}`);
        var newPostRef = postListRef.push();
        newPostRef.set({
          title: title,
          byline: byline,
          abstract : abstract,
          url : url,
        });      
        postListRef.on("value", gotData);
      }
    
      //retrive infos  
      function gotData(data){
        let savedArticle = data.val();
        let keys = Object.keys(savedArticle);
    
        for (let i = 0; i < keys.length; i++){
          let infoData = keys[i];
          let title = savedArticle[infoData].title;
          let byline = savedArticle[infoData].byline;
          let abstract = savedArticle[infoData].abstract;
          let url = savedArticle[infoData].url;
          console.log(title, byline, abstract, url);
        }
      }
    

    const clearList = () => {
        dispatch({type : 'CLEAR_LIST'})
    }

    const remove = (id) => {
        dispatch ({type: 'REMOVE', payload: id})
    }
   
    return (
        <AppContext.Provider
        value={{
            ...state,
            clearList,
            remove,
            toggleToSave,
            dispatch,            
        }}
        >
            {children}
        </AppContext.Provider>
    )


}



export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};