var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AddressSchema =Schema({
  home_add:String,
  office_add:String,
  mobile_phone:{
    type:String,
    required:true
  });

  var Address = mongoose.model('Address',AddressSchema);
  module.exports = Address;
