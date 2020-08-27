let Employee = require('../models/Employee');


module.exports.getEmployee = function(callback){
    Employee.find(function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    })
}

module.exports.postEmployee = function(req, callback){
    let employee = new Employee(req.body);
    employee.save(function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    });
}

module.exports.getEmployeeById = function(req, callback){
    Employee.findById( req.params.id , function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    });
}

module.exports.updateEmployeeById = function(req, callback){
    Employee.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        console.log("=-==-=-==-=-update=-=-=-=-", response, err)
        if(err){
            callback(err);
        }
        callback(response)
    });
}

module.exports.deleteEmployeeById = function(req, callback){
    Employee.findByIdAndDelete( req.params.id , function(err, response){
        if(err){
            callback(err);
        }
        callback(response)
    });
}