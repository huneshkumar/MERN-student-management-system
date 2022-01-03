import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRoutes from './routes/student.js'
const app = express()

app.use('/students',studentRoutes)
app.use(bodyParser.json({limit:"20mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}))
app.use(cors())


const CONNECTION_URL="YOUR DATABSE CONNECTION URL"

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log('sucessfuly conected')
})
.catch((err)=>{
    console.log(err.message)
})

app.listen(process.env.PORT||5000,function(){
    console.log('server is runing on port 5000')
  })