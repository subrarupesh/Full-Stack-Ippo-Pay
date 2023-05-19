const Password = require('../models/passwords');


exports.createResult = (req,res,next) => {
    
    const result = new Password({input: req.body.input, output: req.body.output});
    
    result.save().then((newResult) => {
        res.status(200).json({
            data: newResult,
            message: 'Created Result!'
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        });
    });
}


exports.getResults = (req,res,next) => {
    Password.find({}).sort({date: -1}).then((results) =>  {
        res.status(200).json({
            "message": results 
         });
    }).catch((err) => {
        res.status(400).json({
           "message": err.message 
        });
    });
}


exports.updateResult = (req,res,next) => {
    Password.findOneAndUpdate({"_id": req.params.id.toString()},
    {$set: {"input": (req.body.input), "output": (req.body.output)}}, {new: true}).then((result) =>  {
        res.status(200).json({
            "message": result 
         });
    }).catch((err) => {
        res.status(400).json({
           "message": err.message 
        });
    });
}

exports.deleteResult = (req,res,next) => {
    Password.findOneAndDelete({"_id": req.params.id.toString()}).then((result) =>  {
        res.status(200).json({
            "message": result 
         });
    }).catch((err) => {
        res.status(400).json({
           "message": err.message 
        });
    });
}