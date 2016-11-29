var mongoose = require('mongoose');
var app= require('express')();

var bookSchema = mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Books = module.exports = mongoose.model('books', bookSchema);

module.exports.getBooks = function(callback,limit){
       Books.find(callback).limit(limit);
};

module.exports.getBookById = function(id,callback,limit){
    Books.findById(id, callback);
};

//Add book

module.exports.addBook = function(book,callback){
    Books.create(book,callback);
};

module.exports.updateBook = function(id,book,options,callback){
    var query={ _id:id};
    var update ={
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    };
    Books.findOneAndUpdate(query,update,options,callback);
};

module.exports.removeBook = function(id,callback){
    var query ={_id : id};
    Books.remove(query,callback);
};

