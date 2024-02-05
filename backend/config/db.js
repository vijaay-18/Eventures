const mongoose = require('mongoose');
const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`MongoDb Connected Successfully at ${process.env.PORT}`);
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectDb;