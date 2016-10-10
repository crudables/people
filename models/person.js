//THE PRESON SCHEMA

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var PersonSchema =Schema({
  firstname:{
    type:String,
    required:true,

  },
  lastname:{type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    index :true,
  },
  addresses:[{type:Schema.Types.ObjectId, ref:'Address'}],
  friends:[type:Schema.Types.ObjectId, ref:'Person']
});

//Address schema

var Person = mongoose.model('Person',PersonSchema);
module.exports = Person;
