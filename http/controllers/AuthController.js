const jwt = require("jsonwebtoken");
const User = require("");

exports.login = async (req,res) => {
try{
    const detail = await User.findOne({email:req.body.email});
    if(!detail){
        res.json({
            data:"",
            status:500,
            success:false,
            message:"User not found!"
        })
    }

    if(req.body.passward !== detail.passward){
        res.json({
            status:500,
            message:"Incorrect passward!",
            success:false,
            data:""
        })
    }

    token = jwt.sign({

        userId:detail.id,
        name:detail.name,
        email:detail.email,
        age:detail.age,
        role:detail.role


    },
       "1ace8f9c69a5af814fa6eb064e82da01",
       {expiresIn:"1d"}
);

      res.json({
        data:token,
        status:200,
        success:true,
        message:"User login Successfully!"

      });

} catch(err){
    res.json({
        error:err,
        status:500,
        message:"Internal server error!",
        success:false
    })
}
}

exports