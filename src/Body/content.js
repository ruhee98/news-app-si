import React, {useRef, useEffect, createElement} from 'react';
import {NewsArticle} from './NewsArticle';
class BodyComponent extends React.Component {
    state = {
        loading: true,
        result: null,
      }
    
     async componentDidMount(){
      let url =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=3dbf4804a7314e538a44f7116e934965';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ result: data.articles, loading: false})
      }
      render(){
          return(
              <div>
                  <div>
  {this.state.loading || !this.state.result? <div> loading.. </div> :
    
    this.state.result.map(news => 
    <NewsArticle result={news} key={news.url} />
    )
    }
    
</div>
</div>
)}


}

export default BodyComponent;