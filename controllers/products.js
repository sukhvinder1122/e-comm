const Product = require("../models/products/product");


const addProduct= async (req, res) => {

    try {
        const { name, price, category, stock, image } = req.body;   
        const newProduct = new Product({ name, price, category, stock, image });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);    
    }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
}


const getProducts = async (req, res) => {
    try {
        const products = await Product.find();  
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const getTotalProducts = async (req, res) => {
//     try {
//         const total = await Product.countDocuments();
//         res.json({ total });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



const getProductStats = async (req, res) => {
    try {
        const [total, inStock, outOfStock, totalCategories] = await Promise.all([
            Product.countDocuments(),
            Product.countDocuments({ stock: { $gt: 0 } }),
            Product.countDocuments({ stock: 0 }),
            Product.distinct('category')  // returns array of unique categories
        ]);

        res.json({
            total,
            inStock,
            outOfStock,
            totalCategories: totalCategories.length,
            categories: totalCategories
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
const updateProduct = async (req, res) => {
    try {
        const { name, price, category, stock, image } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, category, stock, image },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { addProduct, getProducts, getProductById, updateProduct, getProductStats }