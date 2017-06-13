const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = function(io) {
	router.use(bodyParser.urlencoded());
	//var body = {text: "tweet here", name: "Anne Marie"}
	//
	router.get('/', function(req, resp, next){
		io.sockets.emit('newTweet', {/*tweet object here */});
		next();
	});
	router.get('/:user/tweets', function(req, res){
		//use req.params
		res.send(req.params.user);
		next();
	});

	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var list = tweetBank.find( {name: name} );
	  console.log('this is the list', list);
	  console.log(name);
	  res.render( 'index', { tweets: list, showForm: true, name: name } );
	});

	router.get('/tweets/:id', function(req, res){
		var tweetID = req.params.id;
		var list = tweetBank.find( {id: parseInt(tweetID)} );
		console.log(list);
		console.log('/tweets/:id');
		res.render( 'index', { tweets: list} );
	});

	router.get('/stylesheets/style.css', function (req, res) {
		res.sendFile( path.resolve(__dirname, '../public/stylesheets/style.css') );
	});

	router.get('/', function( req, res) {
	    let tweets = tweetBank.list();
	    console.log(tweets);
	    //showForm: true;
	    res.render('index', {tweets: tweets, showForm: true } );
	});

	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  res.redirect('/');
	});



	// console.log('router -----', router);
	// console.log('router.handle -----', router.handle);

	// app.get('/', function(req, res){
	// 	console.log('app get / ran');
	//     res.render( 'index', {title: 'Hall of Fame', people: people} );
	// 	// res.send(index); // don't do this render already sends. it will crash
	// });

	// app.get('/tweet/:id', function (req, res) {
	// 	console.log('running tweet');
	// 	console.log(req.params);
	// 	// res.sendStatus(200);
	// 	res.send('you requrested tweet #' + req.params.id);
	// });

	// app.get('/news', function(req, res){
	// 	console.log('app get / ran');
	// 	res.send('this is the news');
	// });

	//module.exports = router;
	return router;
};