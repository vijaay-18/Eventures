const User = require('../models/User.js');
const bcrypt = require('bcrypt');

//get a User

const getUser = async(req,res,next)=>{
    const id = req.params.id;
    try {
        
        const user = await User.findById(id);
        if(user){
            const {password,...otherDetails} = user._doc;
            res.json(otherDetails);
        }else{
            res.status(404).json({message:"user not found"});
        }

    } catch (error) {
        res.status(500).send({message:'Internal Server Error'});
        console.log(error);
    }
}

const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    const {currentUserId,currentUserAdminStatus,password}=req.body;
    if(id === currentUserId || currentUserAdminStatus){
        try {
            if(password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt);
            }
            const user = await User.findByIdAndUpdate(id,req.body,{new:true});
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }else{
        res.status(403).json({message:"Access Denied"});
    }
}

const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    const {currentUserId,currentUserAdminStatus} = req.body;
    if(currentUserId === id || currentUserAdminStatus){
        try {
            await User.findByIdAndDelete(id);
            res.status(200).json({message:"user Deleted Succesfully"});
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }else{
        res.status(403).json({message:"Access Denied"});
    }
}

const followUser = async (req, res, next) => {
    const id = req.params.id;
    const { currentUserId } = req.body;

    // restricting following the person of its own ID
    if (currentUserId === id) {
        res.status(403).json({ message: "Action Forbidden" });
    } else {
        try {
            const user = await User.findById(id); // User who is going to follow a person
            const followingUser = await User.findById(currentUserId); // The person who is going to be followed

            if (!user) {
                // Handle the case where the user with the specified id is not found
                res.status(404).json("User not found");
                return;
            }

            if (!user.followers.includes(currentUserId)) {
                await user.updateOne({ $push: { followers: currentUserId } });
                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json("User Followed!");
            } else {
                res.status(403).json("User is already followed by you");
            }
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }
};

const unFollowUser = async (req, res, next) => {
    const id = req.params.id;
    const { currentUserId } = req.body;

    // restricting following the person of its own ID
    if (currentUserId === id) {
        res.status(403).json({ message: "Action Forbidden" });
    } else {
        try {
            const user = await User.findById(id); // User who is going to follow a person
            const followingUser = await User.findById(currentUserId); // The person who is going to be followed

            if (!user) {
                // Handle the case where the user with the specified id is not found
                res.status(404).json("User not found");
                return;
            }

            if (user.followers.includes(currentUserId)) {
                await user.updateOne({ $pull: { followers: currentUserId } });
                await followingUser.updateOne({ $pull: { following: id } });
                res.status(200).json("User Un-Followed by you");
            } else {
                res.status(403).json("User is not followed by you!");
            }
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }
};


module.exports = {
    getUser,
    updateUser,
    deleteUser,
    followUser,
    unFollowUser
}