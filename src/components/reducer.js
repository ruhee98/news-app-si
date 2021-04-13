const reducer = (state, action) => {


    if (action.type === "SAVE_ITEM"){
        return {...state, 
                savedList: [action.payload, ...state.savedList], 
                }
    }

    if (action.type === "SAVE_ITEM"){
        return {...state, 
                savedList: [action.payload, ...state.savedList], 
                }
    }

    if (action.type === 'REMOVE_ITEM'){
        return {...state, 
            savedList: state.savedList.filter((saved) => 
            saved.id !== action.payload),
            }
    } 
    return state
}

export default reducer;