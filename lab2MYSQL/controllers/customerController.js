const express = require('express');
const { routes } = require('../app');
const router = express.Router();
const customerController = require('../controllers/customerController');
router
.route('/')
.get(customerController.getCustomers)
.post(customerController.createNewCustomers)