const reducer = (state, action) => {
    if (action.type === 'CLEAR_LIST'){
        return {...state, savedArticle: []}
    } 

    if (action.type === 'SAVE_ARTICLE'){
        return {
            ...state,
            savedArticle: action.payload,
        }
    }
    
    if (action.type === 'REMOVE'){
        return {...state, 
            savedArticle: state.savedArticle.filter((saved) => 
            saved.id !== action.payload),
            }
    } 
    if (action.type === 'LOADING'){
        return {...state, loading: true}
    }

    if (action.type === 'DISPLAY_ITEMS'){
        return {...state, savedArticle: action.payload, loading: false}
    }
    return state
}

export default reducer;