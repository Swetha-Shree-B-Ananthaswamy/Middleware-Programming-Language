const Loan = require('../models/loanSchema')


const getAllUsers = async (req, res) => {
  try {
    const users = await Loan.find({})
    res.status(200).json({users})
  } catch (error) {
    res.status(500).json({msg:error})
  }
};

const getUser = async(req, res) => {
  try {
    
    const {id:userID} = req.params
    const user = await Loan.findOne({_id:userID})
    if(!user){
        res.status(404).json({msg:` userID is not present ${userID}`})    
    }
    res.status(200).json({user})    
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const getUserByName = async(req, res) => {
  try {
    console.log("Hiiiixhvvx");
    const user = await Loan.findOne({customerName:req.params.name})
    if(!user){
        res.status(404).json({msg:` userID is not present ${userName}`})    
    }
    res.status(200).json({user})    
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
  }
}


const createUser = async (req, res) => {
  try {
    console.log("Inside Controller");
    const task = await Loan.create(req.body)
    res.status(201).json(task)    
  } catch (error) {
    res.status(500).json({msg:error})
  }
};
const deleteUser = async(req, res) => {
  try {
    const {id:userID} = req.params
    const user = await Loan.findByIdAndDelete({_id:userID})
    if(!user){
        res.status(404).json({msg:` No tasks with Id ${userID}`})
    }
    res.status(200).json({user})    
  } catch (error) {
      res.status(500).json({err:error})
  }
};
const updateUser = async(req, res) => {
  try{
      console.log('In update user ');
      const {id:userID} = req.params
      const user = await Loan.findByIdAndUpdate({_id:userID},req.body, {
      new:true ,runValidators:true })
      console.log(user);
      if(!user){
          res.status(404).json({msg:` No tasks with Id ${userID}`})
      }
      res.status(200).json({user})
    }catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
};

module.exports ={
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByName
}