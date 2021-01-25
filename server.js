const express = require('express'); //Express is the library required to create server
const path = require('path');
const app = express();

app.use(express.static('public'));


//List below are called Routes
//The '/' is the endpoint that determines the URL that'll serve a page
//The '.html' is the file that'll be served

app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/macbookpro', function (request, response) {
    response.sendFile(path.join(__dirname, 'macbookpro.html'))
})

app.get('/car', function (request, response) {
    response.sendFile(path.join(__dirname, 'car.html'))
})

app.get('/house', function (request, response) {
    response.sendFile(path.join(__dirname, 'house.html'))
})

app.get('/charity', function (request, response) {
    response.sendFile(path.join(__dirname, 'charity.html'))
})

app.listen(8080, () => console.log('Listening at port 8080')); 
