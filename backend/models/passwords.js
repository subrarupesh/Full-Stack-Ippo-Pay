const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const passwordSchema = new Schema({ 
   'input': {type: String},
   'output': {type: String},
   'date': {type: Date, default: Date.now}
}, {collection: 'Passwords'});

passwordSchema.plugin(uniqueValidator);

const passwordModel = mongoose.model('Passwords', passwordSchema);
module.exports = passwordModel;