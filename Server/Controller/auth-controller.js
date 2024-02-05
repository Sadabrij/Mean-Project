
const express = require("express");
const User = require("../Model/user");

const home = async(req, res)=>{

    try {

        res
            .status(200)
            .send("Hey Now i'am controller 99")
        
    } catch (error) {
        console.log(`Error accurs inside home ${error}`)
    }

}

const register = async (req, res) => {

    try {

        const {username, email, password, phn, isAdmin} = req.body;

        const isExist = await User.findOne({email:email});

        if( isExist ) {
                return res.status(400).json({message:"user already exit ....."})
        }
        
        const created =  await User.create({username:username, email:email, password:password, phn:phn, isAdmin:isAdmin});
       
        res.status(200).json({message: "user created ...", username: created.username, password: created.password})

    } catch (error) {
        console.log(`Error accurs inside home ${error}`)
    }

}

module.exports = {home, register}

