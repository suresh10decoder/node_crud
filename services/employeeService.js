const employeeDao = require('../dao/employeeDao');

module.exports.getEmployee = function(callback){
    employeeDao.getEmployee(function(response){
        callback(response);
    })
}

module.exports.postEmployee = function(req, callback){
    employeeDao.postEmployee(req, function(response){
        callback(response);
    })
}

module.exports.deleteEmployeeById = function(req, callback){
    employeeDao.deleteEmployeeById(req, function(response){
        callback(response);
    })
}

module.exports.getEmployeeById = function(req, callback){
    employeeDao.getEmployeeById(req, function(response){
        callback(response);
    })
}

module.exports.updateEmployeeById = function(req, callback){
    employeeDao.updateEmployeeById(req, function(response){
        callback(response);
    })
}