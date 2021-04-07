import React, {useState, useContext, useReducer, useEffect} from 'react';
import reducer from './reducer';
import firebase from 'firebase';
import SavedList from './SavedList';

const AppContext = React.createContext();

const initialState = {
    loading: false,
}

const AppProvider = ({children, title, byline, abstract, url}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
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