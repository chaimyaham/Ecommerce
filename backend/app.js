const express=require('express');
const app=express();
const ErrorHandler=require('./middleware/error');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors=require('cors');
// const fileUpload=require("express-fileupload")
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true,
}));
app.use("/", express.static(path.join(__dirname,"./uploads")));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use(fileUpload({useTempFiles:true}));


// configuration
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require("dotenv").config({
        path:"./config/.env"
    })
}

// import routes
const user=require('./controller/user');
const shop = require("./controller/shop");
const order = require("./controller/order");
const product = require("./controller/product");

app.use('/api/v2/user',user);
app.use("/api/v2/shop", shop);
app.use("/api/v2/order", order);
app.use("/api/v2/product", product);


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;