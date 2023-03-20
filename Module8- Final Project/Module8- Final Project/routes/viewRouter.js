const express = require('express')
const viewController = require('../controllers/viewController')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../configs/auth');


router.get('/',forwardAuthenticated, viewController.getLandingPAge);
router.get('/signup',forwardAuthenticated, viewController.getRegisterUserPage)
router.get('/login',forwardAuthenticated ,viewController.getLoginPage)
router.get('/loans',ensureAuthenticated,viewController.getLoanPage)
module.exports = router;

