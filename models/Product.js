const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ProductSchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true

  },
  category: {
    type: String,
    required: true
  },
  img:{
    type: String,
    required: true
  }
})

module.exports = Product = mongoose.model('otop_products', ProductSchema)