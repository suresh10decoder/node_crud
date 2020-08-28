let logger = require("../logger/logger")

module.exports.getAll = function(Model, callback){
    Model.find(function(err, response){
        if(err){
            logger.error(err)
            callback(err);
        }
        callback(response)
    })
}

module.exports.post = function(Model, req, callback){
    let model = new Model(req.body);
    model.save(function(err, response){
        if(err){
            logger.error(err)
            callback(err);
        }
        callback(response)
    });
}

module.exports.getById = function(Model, req, callback){
    Model.findById( req.params.id , function(err, response){
        if(err){
            logger.error(err)
            callback(err);
        }
        callback(response)
    });
}

module.exports.updateById = function(Model, req, callback){
    Model.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err){
            logger.error(err)
            callback(err);
        }
        callback(response)
    });
}

module.exports.deleteById = function(Model, req, callback){
    Model.findByIdAndDelete( req.params.id , function(err, response){
        if(err){
            logger.error(err)
            callback(err);
        }
        callback(response)
    });
}