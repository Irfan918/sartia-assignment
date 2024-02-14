const mongoose = require('mongoose');

//prooduct schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
