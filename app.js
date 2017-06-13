const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
app.use(morgan('dev'));
const routes = require('./routes');
const path = require('path');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
	if (err) throw err;
    console.log('ran render');
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use('/', routes);

app.use('/static', express.static('public')); // uses '/static' as an alias for the  directory location.
// app.use(express.static('files'));s

app.use('/photos/special', function(req, res, next){
	console.log('app use /photos/special ran');
	res.send('You have reached a special area');
});

app.use('/photos', function(req, res, next){
	console.log('app use /photos ran');
	res.send('GET / ');
	next();
});

app.listen(3000, function() {
	console.log('server listening');
});
