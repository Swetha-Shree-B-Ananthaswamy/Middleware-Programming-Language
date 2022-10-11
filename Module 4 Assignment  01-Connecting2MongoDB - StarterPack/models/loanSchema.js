const mongoose = require('mongoose')


const loanSchema = new mongoose.Schema({
    customerName:{
        type:String,
        required:[true ,'much provide with customer Name'],
        trim:true,
        maxlength:[20,'must not exceed more than 20 characters']
    },
    phoneNumber:{
        type:String,
        required:[true ,'much provide with phonenumber'],
        trim:true,
        maxlength:[10,'must not exceed more than 10 numbers']      
    },
    address:{
        type:String,
        required:[true ,'much provide with address'],
        trim:true,
        maxlength:[85,'must not exceed more than 25 characters']      
    },
    loanAmount:{
        type:Number,
        required:[true ,'much provide with loanAmount'],
        trim:true,
    },
    interest:{
        type:Number,
        required:[true ,'much provide with Intrest rate'],
        trim:true,
    },
    loanTermYears:{
        type:Number,
        required:[true ,'much provide with loanTermYears'],
        trim:true,
    },
    loanType:{
        type:String,
        required:[true ,'much provide loan Type'],
        trim:true,
        maxlength:[20,'must not exceed more than 25 characters']      
    },
    description:{
        type:String,
        trim:true,
        maxlength:[35,'must not exceed more than 25 characters']
    },
    createdDate:{
        type:Date,
        default:new Date()
    },
    insertedDate:{
        type:Date,
        default:new Date()
    }
})
module.exports = mongoose.model('Loan' ,loanSchema)
