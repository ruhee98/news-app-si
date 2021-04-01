import React from 'react';
import {useGlobalContext} from './Context';


const SavedItem = ({id, title, byline, url}) => {
    const {remove} = useGlobalContext();
    return (
        <div>
        {/* <img src ={urlToImage} alt={title} /> */} */}
        <h4>{title}</h4>
        <h5>{byline}</h5>
        {/* <h6>{savedArticle.abstract}</h6> */}
        <h6>{url}</h6>
        <button className='remove-btn' onClick={() => remove(id)}>
            Remove
        </button>
        </div>
    )
}

export default SavedItem;