const employeeController = require('../controllers/employeeController.js')

const router = require('express').Router()

router.post('/addEmployee', employeeController.addEmployee)
router.get('/getAllEmployees', employeeController.getAllEmployees)
router.post('/addMultipleEmployee', employeeController.addMultipleEmployee)


module.exports = router