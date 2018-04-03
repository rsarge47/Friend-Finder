var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(path.join(__dirname, 'app', 'public')));
// app.use(express.static("app/public"));

require('./app/routing/api-routes')(app);
require('./app/routing/html-routes')(app);

app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});