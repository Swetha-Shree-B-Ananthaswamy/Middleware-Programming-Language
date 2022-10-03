const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/customerController')
router
.route('/')
.get(CustomerController.getCustomers)
.post(CustomerController.createNewCustomers);
router
.get('/:id')
.get(CustomerController.getCustomersByID)
.patch(CustomerController.patchCustomersByID)
.delete(CustomerController.deleteCustomersByID)
module.exports = router