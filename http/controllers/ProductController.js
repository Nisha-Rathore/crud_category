const Product = require("../../Model/productModel");

exports.create = async (req,res) => {
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
}

exports.list = async (req,res) => {
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
}

exports.update = async(req,res) => {
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
}

exports.delete = async(req,res) =>{
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
}