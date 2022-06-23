const express = require('express');
const router = express.Router();

const slugify = require("slugify");
const Book = require("../../models/books/BookModel");

const { render } = require('express/lib/response');
const res = require('express/lib/response');

router.post("/books/save", (req, resp) => {
    //Declarar as variáveis do formulário 
    var title = req.body.title; 
    var slug = slugify(title);
    var description = req.body.description;
    var author = req.body.author;
    var imageBook = req.body.imageBook;

    console.log(title);
    if(title != undefined){
        Book.create({
            title: title,
            slug:slug,
            description: description,
            author:author,
            imageBook:imageBook
        });
            console.log("Cadastrado com sucesso!");
            res.render("admin/books");
           

    }else{

        console.log("Erro ao cadastrar um livro");
    }
})

module.exports = router;