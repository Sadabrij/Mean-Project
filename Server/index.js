const express = require("express");
const { router } = require("./Router/auth-route");
const app     = express();
const PORT    = 3000;


app.use(express.json());

app.use('/', router);
app.use('/registre', router);

app.listen(PORT, ()=>{

    console.log(`Server running on post ${PORT}`)

})