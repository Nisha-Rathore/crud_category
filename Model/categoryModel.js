const express = require("express");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    description:{type:String,required:true,trim:true},
    website:{type:String,required:true,trim:true},
    is_active:{type:Boolean,default:true,required:true}
},{timestamps:true})

module.exports = mongoose.model("Category",categorySchema);
