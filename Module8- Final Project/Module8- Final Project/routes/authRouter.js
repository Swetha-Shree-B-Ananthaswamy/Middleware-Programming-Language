const express = require('express')
const authController = require('../controllers/authController')
const { ensureAuthenticated, forwardAuthenticated } = require('../configs/auth');
const LoanController = require('../controllers/LoanController')


const router = express.Router();
router.post('/registerUser',forwardAuthenticated,authController.signUpUser)
router.post('/loginUser',forwardAuthenticated,authController.loginUser)
router.post('/applyForLoan',ensureAuthenticated, LoanController.applyForLoans)
router.get('/getAllLoans',ensureAuthenticated ,LoanController.getAllLoanDetails)

module.exports = router;