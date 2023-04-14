var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({

   id:{
    type: Number
       } ,
    name:{
        type: String
    },
    total_qualnity:{
        type:Number
    },
    category:
    {
        type: String
    },
    price: 
    {
        type: Number
    }
});

module.exports = mongoose.model('mvcbatch7products', productSchema);