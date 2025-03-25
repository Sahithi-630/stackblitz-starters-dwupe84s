const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

const revanth = require("./schema");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.get("/",(req,res)=>{
  return res.send({message:"This is  backend"});
})

const router = require("./router");

app.use("/Sahithi",router);





app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Server connected successfully")

    console.log(`Example app listening at http://localhost:${port}`);
  } catch (error) {
    console.log("Error",error);
  }
});