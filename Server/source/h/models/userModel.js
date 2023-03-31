let mongoose = require('mongoose')

const username = "TureON"
const password = "TureON6"
const DB = "TureONDataBase"

const DBUrl = `mongodb+srv://${username}:${password}@cluster0.06y9trh.mongodb.net/${DB}?retryWrites=true&w=majority`
const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(DBUrl,connectionParams)
const db = mongoose.connection;

db.on("error", console.error.bind(console,"connection error : "));
db.once("open",function(){
    console.log("connected successfully......");
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

    }


})


module.exports = mongoose.model('user',userSchema)
