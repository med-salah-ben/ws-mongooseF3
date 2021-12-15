const mongoose = require('mongoose')
const express = require('express');
const connectDB = require('./DB/connectDB');
const ClientDB = require('./models/model')
const app = express();


//new Doc new Client 

// const Client = new ClientDB({name:"salim",age:20,lastName:"khalfouni"});
// Client.save((err)=>{
//    if(err) return console.log(err)
// } )//saved

//Find All Data and find one data

const Search = async ()=>{
    try{
        const data = await ClientDB.find({name:"slh"});
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

// Search()

//Update 

const query = {name:"firas"};
const Update = async ()=>{
    const data = await ClientDB.findOneAndUpdate(query,{name:"jhon",lastName:"deo",age:23},(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    })
}

// Update()

//FindOne And Delete

// const userDeleted = {name:"nader"}
const Delete = async()=>{
    const delData = await ClientDB.
    findOneAndDelete({_id:"61b87e93098a91ef37a3283b"},(data,err)=>{
        try {
            console.log("data deleted")
        } catch (err) {
            console.log(err)
        }
    })
}

Delete()

connectDB()
const PORT = 5000 ;

app.listen(PORT,(err)=>{
    err ? console.log(err)
    :console.log(`server is running on port ${PORT}` )
})