const { name } = require('ejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersschema =  new Schema({name:String,age:String

})
const MyModel = mongoose.model('users',usersschema);
module.exports = MyModel