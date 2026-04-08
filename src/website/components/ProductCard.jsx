import React from 'react';

export const ProductCard = ({ product }) => {
  if (!product) return null;
  return (
    <div className="product-card" style={{border: '1px solid #eee', borderRadius: '8px', padding: '16px', margin: '8px', maxWidth: '250px'}}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {product.image && <img src={product.image} alt={product.name} style={{width: '100%', height: 'auto', borderRadius: '4px'}} />}
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
