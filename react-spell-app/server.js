const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

// could route to api endpoints here, see
// https://dev.to/loujaybee/using-create-react-app-with-express
// for development details
app.get('/api/*', function (req, res) {
    return res.status(501).send('Not implemented');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);