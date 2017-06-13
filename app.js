const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
app.use(morgan('dev'));

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.get('/', function(req, resp){
	resp.send('heyyy');
});

app.get('/news', function(req, resp){
	resp.send('this is the news');
});

app.use('/channel/special', function(request, response, next){
	response.send('You have reached a special area');
});

app.use('/channel', function(request, response, next){
	response.send('GET / ');
	next();
});

app.listen(3000, function() {
	console.log('server listening');
});