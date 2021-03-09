// import axios from 'axios';


// let url =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=3dbf4804a7314e538a44f7116e934965';

export const fetchNews = async () => {

    let searchURL = 'https://newsapi.org/v2/everything?q=bitcoins&apiKey=3dbf4804a7314e538a44f7116e934965';

    fetch(searchURL).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
})

//   try {
//       const {data} = await axios.get(url)

//       const modifiedData = data.map(({source, author, title, description, url, publishedAt}) => (
//         {source: source,
//         author,
//         title,
//         description,
//         url,
//         publishedAt
//      }))
//      return modifiedData;
//       } catch (error){
//           return error;
//       }
};