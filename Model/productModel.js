const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    BrandId:{type:mongoose.Schema.Types.ObjectId,ref:"Brand",trim:true,required:true},
    CategoryId:{type:mongoose.Schema.Types.ObjectId,ref:"Category",trim:true,required:true},
    price:{type:Number,trim:true,required:true},
    mrp:{type:Number,trim:true,required:true},
    is_active:{type:Boolean,default:true,required:true}

},{timestamps:true})

module.exports = mongoose.model("Product",productSchema);
