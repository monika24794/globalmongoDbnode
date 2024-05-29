const mongoose = require('mongoose');
//database connection function used to connect
async function  connection(options) {
    var ans= await mongoose.connect('mongodb+srv://admin:admin@cluster0.uwiuv5t.mongodb.net/sample');
   // console.log(ans);
}
module.exports = connection;
