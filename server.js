const express = require("express");
const app = express();
const port = process.env.PORT || 34500;
const mongoose = require('mongoose')


app.use('/',require('./router/index'))



mongoose.connect('mongodb://localhost:27017/TestSaveOnMongo', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(port,()=>{
    console.log(`Port Run : ${port}`);
})