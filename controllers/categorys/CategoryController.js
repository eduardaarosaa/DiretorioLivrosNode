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
        //    req.toastr.success('Successfully logged in.', "You're in!");
        //    req.toast.success = true;

           res.redirect("/admin/categories");
        })
    }else{
        // req.toastr.error('Invalid credentials.');
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


