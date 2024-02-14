const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//api for creating new product
router.post('/products', async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const newProduct = new Product({ name, price, category });
    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//update a product by id
router.put('/products/:id', async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const productId = req.params.id;

    await Product.findByIdAndUpdate(productId, { name, price, category });

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//delete a product by ID
router.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//fetch all products
router.get('/products', async (req, res) => {
  try {
     const products = await Product.find();

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//fetch all categories
router.get('/categories', async (req, res) => {
  try {    
    const categories = await Product.distinct('category');

    res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
