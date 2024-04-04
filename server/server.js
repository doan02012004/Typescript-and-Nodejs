const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const routes = require('./routes/index')
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
const Port = process.env.PORT;
const dbUrl = process.env.DB_URL;
// connect MongoDB
connectDB(dbUrl)

//Router Products
routes(app)

app.listen(Port,()=>{
    console.log('Server is running');
})