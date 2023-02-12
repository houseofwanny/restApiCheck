const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    name:{
       type:String,
       required:true 
    },
    age:{
        type:Number,
    },
    favouriteFoods:[{
        type:String,
        length:5
    }]

})

const userdbs= mongoose.model('userdbs',schema);

module.exports = userdbs;