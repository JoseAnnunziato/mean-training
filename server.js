var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', sayHello);
app.post('/api/blogpost', createPost);
app.get('/api/blogpost', getAllPosts);

var posts = [];

function getAllPosts(req, res) {
    res.json(posts);
}

function createPost(req, res) {
    var post = req.body;
    posts.push(post);
    res.json(posts);
}

function sayHello(req, ewq){
    ewq.send({message: 'hello from the server'});
}

require('./products/app.js')(app);

require('./webApp/app.js')(app);

app.listen(3000);