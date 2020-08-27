const employeeService = require("../services/employeeService")

module.exports.getEmployee = function(req, res){
    employeeService.getEmployee(function(response){
        res.json(response)
    });
}

module.exports.postEmployee = function(req, res){
    employeeService.postEmployee(req, function(response){
        res.json(response)
    });
}

module.exports.getEmployeeById = function(req, res){
    employeeService.getEmployeeById(req, function(response){
        res.json(response)
    });
}

module.exports.deleteEmployeeById = function(req, res){
    employeeService.deleteEmployeeById(req, function(response){
        res.json(response)
    });
}

module.exports.updateEmployeeById = function(req, res){
    employeeService.updateEmployeeById(req, function(response){
        res.json(response)
    });
}

