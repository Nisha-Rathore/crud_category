const express = require("express");
const categoryRouter = require("./Router/api");
const mongoose = require("mongoose");
const app = express();
const PORT = 8888;

app.use(express.json());

app.use("/api",categoryRouter);



app.listen(PORT,()=>{
    console.log(`API is run on the http://localhost:${PORT} server`);
    
})

mongoose.connect("mongodb+srv://rathorenisha397_db_user:FyD450e9i4dRHZyD@userdata.x6f1kdi.mongodb.net/").then(() =>{
    console.log("Connected to MongoDB");
})