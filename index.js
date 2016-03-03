var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index.html');
});
app.get('/index.html', function(request, response) {
  response.render('index.html');
});
app.get('/producer.html', function(request, response) {
  response.render('producer.html');
});
app.get('/dev.html', function(request, response) {
  response.render('dev.html');
});
app.get('/ux.html', function(request, response) {
  response.render('ux.html');
});
app.get('/tim-stevenson-resume.pdf', function(request, response) {
  response.render('tim-stevenson-resume.pdf');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});