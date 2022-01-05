import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRoutes from './routes/student.js'
const app = express()
app.use(cors())
app.use('/students',studentRoutes)
app.use(bodyParser.json({limit:"20mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}))



const CONNECTION_URL="mongodb+srv://<user>:<pass>@cluster0.qumje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log('sucessfuly conected')
})
.catch((err)=>{
    console.log(err.message)
})

app.listen(process.env.PORT||5000,function(){
    console.log('server is runing on port 5000')
  })