const {loginValidation} = require('../models/validation')

/* 
 const signin = async (req,res)=>{
    console.log(req.body);
    const {error} = await  loginValidation.validate(req.body);
    if (error) {
        return res.status(500).send(error.details[0])
    }else{
        res.send(req.body)
    }
};
 */
module.exports =  signin;