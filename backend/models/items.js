const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    description: {
    type: String,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('items',ItemSchema)


// RyIaJAA68bgBzRkb;