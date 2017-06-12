const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev')); 
//jason edit


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