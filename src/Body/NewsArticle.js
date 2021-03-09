import React from 'react';

export function NewsArticle({result}){
    return(
    <div>
        <div><h4>{result.title}</h4></div>
        <div>{result.source.name}</div>
        <div>{result.author}</div>
        <div>{result.content}</div>
        <div>{result.url}</div>
        <img src={result.urlToImage} width='300'/> 
    </div>
    ) 
    
}

