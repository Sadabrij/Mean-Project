const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phn:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }

})

const User = new mongoose.model("users", userSchema);

module.exports = User;