'use strict';
var mongoose = require('mongoose'), 
ObjectId   = mongoose.Schema.Types.ObjectId;


var Drawing = mongoose.Schema({
  name: { type: String, required: 'Drawing name required' },
  created_at: { type: Date, default: Date.now },
  svg: {
    type: String,
    required: 'Drawing content required'
  }
});

module.exports = mongoose.model('Drawing', Drawing);