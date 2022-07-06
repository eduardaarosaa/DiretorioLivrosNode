const express = require("express");
const req = require("express/lib/request");

const router = express.Router();

const Category = require("./../../models/categorys/CategoryModel");

const slugify = require("slugify");

router.post("/categories/save", (req,res) => {
    var nomeCategoria = req.body.nomeCategoria;
    if(nomeCategoria != undefined){
      
                Category.findAll().then(categories => {

                    Category.create({
                        nomeCategoria:nomeCategoria,
                        slug: slugify(nomeCategoria)
                    }).then(()=> {
            
                console.log(req.toastr.success);
                req.toastr.success('Categoria salva com sucesso!');
                res.render("admin/categories", {req: req, categories:categories});
            
                })
            })
   }else{
                req.toastr.error('Erro ao salvar a categoria.');
                res.render("admin/createCategories", {req: req});
   }
    
});
    
    
// });

router.get("/categories/create", (req,res) => {
    res.render("admin/createCategories", {
        req: req
    });

});

router.get("/admin/categories", (req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories", {
            categories: categories
        });
    });
});

router.get("/painel", (req,res)=>{
    res.render("admin/painel");
});


module.exports = router;


