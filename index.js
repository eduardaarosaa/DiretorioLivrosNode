const express = require("express");
const res = require("express/lib/response");

const app = express(); // Criando uma instancia do express

//Importar o body-parser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
})); 

app.use(bodyParser.json());


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

