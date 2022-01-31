const db = require('../models/')

const Employee = db.employees;

const addEmployee = async (req, res) => {
    let info ={
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
    }

    const employee = await Employee.create(info)
    res.send(true);
}

const addMultipleEmployee = async (req, res) => {
    let info = req.body
    const bulkEmployee = await Employee.bulkCreate(info)
    res.send(true);
}

const getAllEmployees = async (req, res) =>{
    let employees = await Employee.findAll({})
    res.status(200).send(employees);
}

module.exports = {
    addEmployee,
    getAllEmployees,
    addMultipleEmployee
}