const Sequelize = require("sequelize");
const connection = require("../../database/database");
const Category = require("../categorys/CategoryModel");

const Book = connection.define('books', {
    
    title:{
        type:Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }, 
    author:{
        type:Sequelize.STRING,
        allowNull:false
    }, 
    imageBook: {
        type:Sequelize.STRING,
        allowNull:false
    }
});

Category.hasMany(Book); //Uma categoria pode ter varios livros
Book.belongsTo(Category); //Um livro pertence a uma categoria

/*Book.sync({
    force:true
});*/

module.exports = Book;