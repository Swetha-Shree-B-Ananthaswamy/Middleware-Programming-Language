const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({

    LOANTYPE:{
        type:String,
        required:[true ,'Please provide LoanType'],
        trim:true,
    },
    LOANNUMBER:{
        type:Number,
        required:[true ,'Please provide LoanNumber'],
        trim:true
    },
    AMOUNT:{
        type:Number,
        required:[true ,'Please provide Amount'],
        trim:true
    },
    INTERESTRATE:{
        type:Number,
        required:[true ,'Please provide Intrest Rate'],
        trim:true
    },
    LOANTERM:{
        type:Number,
        required:[true ,'Please provide Term in Years'],
        trim:true,
    },
    CREATEDDATE:{
        type:Date,
        trim:true,
        default: new Date()
    },
    MODIFIEDDATE:{
        type:Date,
        trim:true,
        default: new Date()
    },
    ISDELETED:{
        type:Boolean,
        trim:true,
        defaut:false
    },
    userId:{type:mongoose.Schema.Types.ObjectId ,ref:'User'}

})
module.exports = mongoose.model('Loan' ,loanSchema)
