const express = require('express'); //Express is the library required to create server
const path = require('path');
const app = express();

app.use(express.static('public'));


//List below are called Routes
//The '/' is the endpoint that determines the URL that'll serve a page
//The '.html' is the file that'll be served

app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, 'home_2.html'))
})

app.get('/macbookpro', function (request, response) {
    response.sendFile(path.join(__dirname, 'macbookpro_2.html'))
})

app.get('/car', function (request, response) {
    response.sendFile(path.join(__dirname, 'car_2.html'))
})

app.get('/house', function (request, response) {
    response.sendFile(path.join(__dirname, 'house_2.html'))
})

app.get('/charity', function (request, response) {
    response.sendFile(path.join(__dirname, 'charity_2.html'))
})

app.get('/about', function (request, response) {
    response.sendFile(path.join(__dirname, 'about_2.html'))
})

app.get('/contact', function (request, response) {
    response.sendFile(path.join(__dirname, 'contact_2.html'))
})

app.listen(8080, () => console.log('Listening at port 8080')); 
