const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config();
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("hello world!")
});
app.listen(port,()=>{
    console.log(`app is listening at ${port} port.`)
});