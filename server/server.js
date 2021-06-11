const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../build');
const axios = require('axios');

require('dotenv').config()

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath));
});

app.get('/api', (req, res) => {
    axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NEW_YORK_TIMES_BEST_SELLERS_API_KEY}`)
    .then(response => {
        let data = response.data;
        res.send({ data });
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});