import React, {useState, useContext, useReducer, useEffect} from 'react';
import {auth, savedItem} from '../firebase/firebase';
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    // const [state, dispatch] = useReducer(reducer, initialState);

    const [saveLater, setSaveLater] = useState(false);
    const toggleSaveLater = () => {
        setSaveLater(!saveLater)
    }


    const removeData = (articleId) => {
        var uid = auth.currentUser.uid;
        savedItem(uid).child(articleId).remove().then(function() {
            console.log("Remove succeeded.")
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message)
    });
    }
   
    return (
        <AppContext.Provider
        value={{
            saveLater,
            toggleSaveLater,
            removeData,
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
