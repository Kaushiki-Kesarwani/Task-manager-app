const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
 const authroutes = require('./routes/authRoutes');
 const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectdb();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

 app.use('/user',authroutes);
app.use('/api/tasks',taskRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.PORT ;

app.listen(port,()=>{
console.log(`app is listening at ${port} port.`);
});
