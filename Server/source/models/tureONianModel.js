const dotenv = require("dotenv")
const mongoose = require('mongoose')

dotenv.config({path:'C:/NOBLEAUSTINE/GitTogether/TureON/Server/source/config.env'})
const DBUrl = process.env.URL


const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true

}

mongoose.connect(DBUrl,connectionParams)
const db = mongoose.connection;

db.on("error", console.error.bind(console,"connection error : "));
db.once("open",function(){
    console.log("successfully connected to the DataBase......");
});

let userSchema = mongoose.Schema({

 _id: mongoose.Schema.Types.ObjectId,

    username: {
        type:String,
        require: true,
        unique: true
    },

    email: {
        type: String,
        unique: true
        // ,match:

    },

    password: {
        type: String,
        require: true,
        unique: true

    },

    name:{
        type: String
    },

    gitId:{
        type : String
    },

    about:{
        type : String
    },

    image:{
        data: Buffer,
        contentType: String
    }


})


module.exports = mongoose.model('tureONians',userSchema)
