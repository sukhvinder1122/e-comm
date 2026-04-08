const express = require('express');
const { addProduct,getProducts ,getProductById , updateProduct ,getProductStats} = require('../controllers/products');

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/all-products', getProducts);
router.get('/product-stats', getProductStats);
router.get('/products/:id', getProductById); 
router.put('/products/:id', updateProduct);

module.exports = router;