const User = require('../models/User.js');
const bcrypt = require('bcrypt');


const signUp = async(req,res,next)=>{   
    const {
        userName,
        email,
        password,
        firstName,
        lastName,
        gender,
        contact,
    } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);
    const newUser = new User({
        userName,
        email,
        password: hashedpassword,
        firstName,
        lastName,
        gender,
        contact
    })
    try{
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (error) {
        res.status(404).send({message:'Invalid Credentials'});
        console.log(error);
    }
}


const login = async (req,res,next)=>{
    const {
        userName,
        password
    } = req.body;
    try {
        const user = await User.findOne({userName : userName});
        if(user){
            const login = await bcrypt.compare(password,user.password);
            login? res.status(201).json(user):res.status(400).json({message:"password unmatched"});
        }else{
            res.status(404).send({message:"User not exists"});
        }
    } catch (error) {
        console.log("error");
    }
}

module.exports = {
    signUp,
    login
}