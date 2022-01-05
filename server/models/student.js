import mongoose from 'mongoose';

const studentSchema=mongoose.Schema({
    regNo:{
        type:Number,
        default:0
    },
    name:{
        type:String,
        default:''
    },
    grade:{
        type:String,
        default:''
    },
    section:{
        type:String,
        default:'A'
    }
})

const student=mongoose.model('student',studentSchema);
export default student;