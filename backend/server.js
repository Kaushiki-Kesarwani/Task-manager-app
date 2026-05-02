const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');

dotenv.config();
connectdb();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.PORT ;

app.listen(port,()=>{
console.log(`app is listening at ${port} port.`);
});
