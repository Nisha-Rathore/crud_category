const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = require("../Model/categoryModel");


router.post("/create",async (req,res) => {
    try{
        const category = new Category({
           
            name:req.body.name,
            description:req.body.description,
            logo:req.body.logo,
            website:req.body.website,
            status:req.body.status
        })
        await category.save();

        res.json({
            data:category,
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


router.get("/list",async (req,res) => {
    try{
        const list = await Category.find();

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

router.put("/update/:category_id",async(req,res) => {
    try{
        const updatedData = await Category.findByIdAndUpdate(req.params.category_id,req.body,{new:true});
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

router.delete("/delete/:category_id",async(req,res) =>{
     try{
        const deletedData = await Category.findByIdAndDelete(req.params.category_id);
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
