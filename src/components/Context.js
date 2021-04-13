import React, {useReducer} from 'react';
import reducer from './reducer';


const initialState = {
    savedList : [],
}

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    //actions   
    const saveItem = (article) => {
        dispatch({type: "SAVE_ITEM", payload: article})
    }

    const removeItemFromSavedList = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }
   
    return (
        <GlobalContext.Provider
        value={{
            savedList: state.savedList,
            saveItem,
            removeItemFromSavedList,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
    }

