const express=require('express');
const app=express();
const ErrorHandler=require('./middleware/error');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors=require('cors');
// const fileUpload=require("express-fileupload")


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/",express.static('uploads'));
app.use(bodyParser.urlencoded({extended:true}));
// app.use(fileUpload({useTempFiles:true}));


// configuration
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require("dotenv").config({
        path:"./config/.env"
    })
}

// import routes
const user=require('./controller/user');
app.use('/api/v2/user',user)


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;