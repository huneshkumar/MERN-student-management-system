import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json({limit:"20mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}))

app.use(cors())

const CONNECTION_URL="mongodb+srv://hunesh:admin1996@cluster0.qumje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT=process.env|| 8000;
mongoose.connect(CONNECTION_URL).then(()=>{
    console.log('sucessfuly coneected')
})
.catch((err)=>{
    console.log(err.message)
})
