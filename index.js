const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello'));

//MongoDB connection
mongoose.connect("mongodb+srv://irfanmi991899:miirfan@cluster0.wpw0e2r.mongodb.net/?retryWrites=true&w=majority");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//all routes
app.use('/auth', authRoutes);
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
