const express = require("express");
const router = express.Router();
const Brand = require("../Model/brandModel");
const Product = require("../Model/productModel");
const CategoryController = require("../http/controllers/CategoryController");

//category

router.post("/category/create",CategoryController.create);

router.get("/category/list",CategoryController.list);

router.put("/category/update/:category_id",CategoryController.update);

router.delete("/category/delete/:category_id",CategoryController.delete);
  module.exports = router;

  //brand
router.post("/brand/create",async (req,res) => {
    try{
        const brand = new Brand({
           
            name:req.body.name,
            description:req.body.description,
            logo:req.body.logo,
            website:req.body.website,
            status:req.body.status
        })
        await brand.save();

        res.json({
            data:brand,
            status:"200",
            success:true,
            message:"Data created succesfully"
        })
    }catch(err){
        res.json({
            error:err,
            status:"500",
            message:"Failed to create data",
            success:true

        })
    }
})


router.get("/brand/list",async (req,res) => {
    try{
        const list = await Brand.find();

        res.json({
            data:list,
            status:"200",
            success:true,
            message:"Data read succesfully"
        })
    } catch(err){
         res.json({
            error:err,
            status:"500",
            message:"Failed to read data",
            success:true

        })
    }
})

router.put("/brand/update/:_id",async(req,res) => {
    try{
        const updatedData = await Brand.findByIdAndUpdate(req.params.category_id,req.body,{new:true});
        res.json({
            data:updatedData,
            status:"200",
            success:true,
            message:"Data updated succesfully"
        })
    } catch(err){
         res.json({
            error:err,
            status:"500",
            message:"Failed to update data",
            success:true

        })

    }
})

router.delete("/brand/delete/:category_id",async(req,res) =>{
     try{
        const deletedData = await Brand.findByIdAndDelete(req.params.category_id);
        res.json({
            data:deletedData,
            status:"200",
            success:true,
            message:"Data deleted succesfully"
        })
    } catch(err){
         res.json({
            error:err,
            status:"500",
            message:"Failed to delete data",
            success:true

        })

    }
})

// products

router.post("/product/create",async (req,res) => {
    try{
        const product = new Product({
           
            name:req.body.name,
            BrandId:req.body.BrandId,
            categoryId: req.body.categoryId,
            price:req.body.price,
            mrp:req.body.mrp,
            is_active:req.body.is_active
        })
        await product.save();

        res.json({
            data:product,
            status:"200",
            success:true,
            message:"Data created succesfully"
        })
    }catch(err){
        res.json({
            error:err,
            status:"500",
            message:"Failed to create data",
            success:true

        })
    }
})


router.get("/product/list",async (req,res) => {
    try{
        const list = await Product.find();

        res.json({
            data:list,
            status:"200",
            success:true,
            message:"Data read succesfully"
        })
    } catch(err){
         res.json({
            error:err,
            status:"500",
            message:"Failed to read data",
            success:true

        })
    }
})

router.put("/product/update/:_id",async(req,res) => {
    try{
        const updatedData = await Product.findByIdAndUpdate(req.params.category_id,req.body,{new:true});
        res.json({
            data:updatedData,
            status:"200",
            success:true,
            message:"Data updated succesfully"
        })
    } catch(err){
         res.json({
            error:err,
            status:"500",
            message:"Failed to update data",
            success:true

        })

    }
})

router.delete("/product/delete/:category_id",async(req,res) =>{
     try{
        const deletedData = await Product.findByIdAndDelete(req.params.category_id);
        res.json({
            data:deletedData,
            status:"200",
            success:true,
            message:"Data deleted succesfully"
        })
    } catch(err){
         res.json({
            error:err,
            status:"500",
            message:"Failed to delete data",
            success:true

        })

    }
})
  module.exports = router;