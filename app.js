var express = require('express');
var app=express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/bookStore");
var db= mongoose.connection;

Books = require("./models/books");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());



// Set Static Folder
app.use(express.static(__dirname + '/client'));



app.use(bodyParser.json());
app.get('/',function(req,res){
    res.send('hi');
});

app.get('/api/books',function(req,res){
    Books.getBooks(function (err,books) {
        if(err){
            throw err;
        }
        res.json(books);
    })
});

app.post('/api/books',function(req,res){
    var book = req.body;

    Books.addBook(book,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.delete('/api/books/:_id',function(req,res){
    var id = req.params._id;
    Books.removeBook(id,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.put('/api/books/:_id',function(req,res){
    var book = req.body;
    var id=req.params._id;
    console.log("Got req "+id);
    Books.updateBook(id,book,{},function (err,book) {
        if(err){
            throw err;
        }
        console.log("success");
        res.json(book);
    });
});


app.get('/api/books/:_id',function(req,res){

    Books.getBookById(req.params._id,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});


app.get('/api/books',function(req,res){
    Books.getBooks(function (err,books) {
        if(err){
            throw err;
        }
        res.render('index',{books :books});
    })
});

app.post('/api/books',function(req,res){
    var book = req.body;

    Books.addBook(book,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book).pretty();
    });
});

app.delete('/api/books/:_id',function(req,res){
    var id = req.params._id;
    Books.removeBook(id,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.put('/api/books/:_id',function(req,res){
    var book = req.body;
    var id=req.params._id;
    Books.updateBook(id,book,{},function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.get('/api/books/:_id',function(req,res){
    Books.getBookById(req.params._id,function (err,book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});


app.listen(3000);
console.log("Serving on port 3000");