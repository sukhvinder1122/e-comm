const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
 
dotenv.config();
connectDB();
 
const app = express();
app.use(express.json());
 
app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});

app.use('/api/products', require('./routes/Productroute'));


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
 