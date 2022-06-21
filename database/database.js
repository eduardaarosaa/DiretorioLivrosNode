const {Sequelize} = require("sequelize");

//Criando conexão com o DB

const connection = new Sequelize(
    "diretorioLivros", "root", "", {
        host: 'localhost', 
        dialect: 'mysql', 
        timezone: "-03:00"
    }
);

module.exports = connection;