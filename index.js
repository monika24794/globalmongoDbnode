var bodyParser = require('body-parser')
var cors = require('cors')
var connection = require('./db.js')
connection()
//connection to custum models
var MyModel = require("./models/usermodel.js")
var express = require("express");
var app = express();
app.use(cors())

// this used for reading data from forms
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/users", async function (req, res) {
    try {
        var ans =await MyModel.find()
        res.send(ans)
        // res.render('userdata.ejs',{data:ans})
        //data:ans
    } catch (error) {
res.send("something went wrong")
    }
})
app.get("/add-user", function (req, res) 
{
    res.render('adduser.ejs')
})
app.post("/user-action" , async function (req, res){
    //capture data from  web page form submission
    //console.log(req.body);
    try {
        var record=new MyModel(req.body)
        //instance of mymodel and passing data  from webpage to it
        var ans = await record.save();
        res.send({"message ":"record insertead"})
       // res.redirect("/users")
    } catch (error) {
        
    }
})
app.listen(7000)