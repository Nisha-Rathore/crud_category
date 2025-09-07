const express = require("express");
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    description:{type:String,default:""},
    logo:{type:String,default:""},
    website:{type:String,default:""},
    status:{type:String,enum:["active","inactive"],default:"active"}

},{timestamps:true})

module.exports = mongoose.model("Category",categorySchema);
