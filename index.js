const express = require("express");
const res = require("express/lib/response");
const connection = require("./database/database");

const Category = require("./models/categorys/CategoryModel");
const Book = require("./models/books/BookModel");

const app = express(); // Criando uma instancia do express

//Importar o body-parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
})); 

app.use(bodyParser.json());

//Database

connection.authenticate().then(()=>{
    console.log("Conexão efetuada com sucesso!");
}).catch((error)=>{
    console.log(error);
})

//Importar view engine
app.set('view engine', 'ejs');

//Configurar o  express static

app.use(express.static('public'));


//Routes

app.get("/", (req,res)=> {

    res.render("index");


});

//Inicializando a aplicação

app.listen(8080, () =>{
    console.log("O servidor está rodando (: ");
}); 

