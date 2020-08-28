const Base = require('../dao/BaseDao');
let Employee = require('../models/Employee');

module.exports.getEmployee = function(callback){
    Base.getAll(Employee, function(response){
        callback(response);
    })
}

module.exports.postEmployee = function(req, callback){
    Base.post(Employee, req, function(response){
        callback(response);
    })
}

module.exports.deleteEmployeeById = function(req, callback){
    Base.deleteById(Employee, req, function(response){
        callback(response);
    })
}

module.exports.getEmployeeById = function(req, callback){
    Base.getById(Employee, req, function(response){
        callback(response);
    })
}

module.exports.updateEmployeeById = function(req, callback){
    Base.updateById(Employee, req, function(response){
        callback(response);
    })
}