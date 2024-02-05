const mongoose = require("mongoose");


const connectDB = async() => {

    try {

        await mongoose.connect(process.env.URI);
        console.log("Database connection successful...");
        
    } catch (error) {
        
        console.log("Database connection failed", error);

    }

}

module.exports = connectDB;

