const express = require("express");

const router = express.Router()

const employeeController = require('../controllers/employeeController')

// Retrieve all employees
router.get('/employee/', employeeController.getEmployee);

// Create a new employee
router.post('/employee/', employeeController.postEmployee);

// Retrieve a single employee with id
router.get('/employee/:id', employeeController.getEmployeeById);

// Update a employee with id
router.put('/employee/:id', employeeController.updateEmployeeById);

// Delete a employee with id
router.delete('/employee/:id', employeeController.deleteEmployeeById);

module.exports = router