import axios from 'axios';

// let url =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=3dbf4804a7314e538a44f7116e934965';


const options = {
  method: 'GET',
  url: 'https://google-news1.p.rapidapi.com/topic-headlines',
  params: {topic: 'WORLD', country: 'US', lang: 'en'},
  headers: {
    'x-rapidapi-key': '4e40bbae48mshbc0c72f31feb295p1401c7jsn7bfd78bd3870',
    'x-rapidapi-host': 'google-news1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export const fetchLatestNews = async () =>{
    let url =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=3dbf4804a7314e538a44f7116e934965';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
}

