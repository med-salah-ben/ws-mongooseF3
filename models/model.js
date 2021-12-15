const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ClientSchema = new Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    lastName: {type:String}
});

const ClientDB = model('client',ClientSchema)
module.exports= ClientDB
