const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ghanaagenda = express();

ghanaagenda.set('port', (process.env.PORT || 5000));

ghanaagenda.use(bodyParser.urlencoded({extended: false}));
ghanaagenda.use(bodyParser.json());

ghanaagenda.get('/', function(req, res){
	res.send('Welcome buddy')
})

ghanaagenda.get('/webhook/', function(req, res){
	if(req.query['hub.verify_token'] ===
		'my_page_is_my_password'){
			res.send(req.challenge['hub.challenge'])
		}
		res.send('No entry')
}) 

ghanaagenda.listen(ghanaagenda.get('port'), function(){
	console.log('running on port', app.get('port'))
})