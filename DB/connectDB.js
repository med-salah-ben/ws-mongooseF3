const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Client'),
        console.log("DB connected")
      } catch (error) {
        handleError(error);
      }
}

module.exports = connectDB