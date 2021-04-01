const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'));
app.use(express.json({limit : 'lmb'}))
const database = new Datastore('database.db');
database.loadDatabase();

app.post('/saved-article', (request, response) => {
    console.log('I got a request');
    console.log(request.body);
    const data = request.body;
    database.push(data);
    console.log(database);
    response.json({
        status: 'success',

    })
})