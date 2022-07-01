// ExpressJS
var express = require('express')
// Dependencies
    ,flash = require('connect-flash')
    ,session = require('express-session')
    ,cookieParser = require('cookie-parser')
// express-toastr
    ,toastr = require('express-toastr');


const res = require("express/lib/response");
const connection = require("./database/database");

const Category = require("./models/categorys/CategoryModel");
const categoriesController  = require("./controllers/categorys/CategoryController");
const Book = require("./models/books/BookModel");
const booksController = require("./controllers/books/BookController");


const app = express(); // Criando uma instancia do express

//Importar o body-parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
})); 

app.use(bodyParser.json());

// Dependencies
app.use(cookieParser('secret'));
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());

// Load express-toastr
// You can pass an object of default options to toastr(), see example/index.coffee
app.use(toastr());

app.use(function (req, res, next)
{
    res.locals.toasts = req.toastr.render()
    next()
});

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
app.use("/", categoriesController);
app.use("/", booksController);
app.get("/", (req,res)=> {

    res.render("index");
});

app.get("/admin/category", (req,res)=>{
    res.render("admin/createCategories");
});


app.get("/admin/book", (req,res)=>{
    res.render("admin/create-books");
});

//Inicializando a aplicação

app.listen(8080, () =>{
    console.log("O servidor está rodando (: ");
}); 

