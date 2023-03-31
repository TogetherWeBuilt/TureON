//creating required objects
const express = require('express')
const app = express()
const bodyParser =require('body-parser')

const userRoute = require('./routes/tureONian')


app.use(bodyParser.json());
app.use((req,res,next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl} `,req.body)
    next() 
})
app.use(userRoute);
app.use((req,res,next)=>{
    res.status(404).send('you are lost my friend......')
})

const PORT = process.env.PORT || 8000 
app.listen(PORT,()=> console.info(`Server has started on port ${PORT}......`)) 