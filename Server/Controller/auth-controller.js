
const express = require("express");

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

        res
            .status(200)
            .json({message: req.body})
        
    } catch (error) {
        console.log(`Error accurs inside home ${error}`)
    }

}

module.exports = {home, register}

