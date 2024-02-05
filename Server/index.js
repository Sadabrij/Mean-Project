
require("dotenv").config();

const express = require("express");
const { router } = require("./Router/auth-route");
const connectDB = require("./Utils/db");

const app     = express();
const PORT    = 3000;

app.use(express.json());
connectDB();

app.use('/', router);
app.use('/registre', router);


app.listen(PORT, ()=>{

    console.log(`Server running on post ${PORT}`)

})



