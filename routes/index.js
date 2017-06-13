const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const path = require('path');


router.get('/', function( req, res) {
	let tweets = tweetBank.list();
	res.render('index', {tweets: tweets } );

});

router.get('/stylesheets/style.css', function (req, res) {
	res.sendFile('/Users/jasonhu/Desktop/FullStack/twitter.js/public/stylesheets/style.css');
	// res.sendFile( path.resolve(__dirname, '../public/stylesheets/style.css') );
});

router.get()

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

module.exports = router;