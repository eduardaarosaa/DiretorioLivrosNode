const express = require("express");
const req = require("express/lib/request");

const router = express.Router();

const Category = require("./../../models/categorys/CategoryModel");

const slugify = require("slugify");

router.post("/categories/save", (req,res) => {
    var nomeCategoria = req.body.nomeCategoria;

    console.log(nomeCategoria);

    if(nomeCategoria != undefined){
        Category.create({
            nomeCategoria:nomeCategoria,
            slug: slugify(nomeCategoria)
        }).then(()=> {
      
        req.toastr.success('Categoria salva com sucesso!');
        res.render("admin/createCategories", {req: req});
       
        })
    }else{
        req.toastr.error('Erro ao salvar a categoria.');
        res.render("admin/createCategories", {req: req});
    }
    
});

router.get("/admin/categories", (req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories", {
            categories: categories
        });
    });
});

// router.get("categories", (req,res)=>{
//     res.render("admin");
// })

module.exports = router;


