import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  // Sample product data (in real app, this would come from API)
  const product = {
    id: parseInt(id),
    name: 'Wireless Headphones',
    price: 79.99,
    originalPrice: 99.99,
    images: ['🎧', '🎧', '🎧', '🎧'],
    category: 'Electronics',
    rating: 4.5,
    reviews: 234,
    badge: 'Best Seller',
    description: 'Experience premium sound quality with our wireless headphones. Featuring advanced noise cancellation technology, 30-hour battery life, and comfortable over-ear design.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Comfortable over-ear design',
      'Built-in microphone for calls',
      'Foldable design for portability'
    ],
    specifications: {
      'Brand': 'AudioTech',
      'Model': 'WH-1000XM4',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 hours',
      'Charging Time': '3 hours',
      'Weight': '254g',
      'Warranty': '2 years'
    },
    colors: ['Black', 'Silver', 'Blue', 'Red'],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 15
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <Link to="/products">Products</Link>
        <span className="separator">/</span>
        <span className="current">{product.name}</span>
      </nav>

      <div className="product-detail-content">
        {/* Product Images */}
        <div className="product-images">
          <div className="main-image">
            <span className="product-emoji large">{product.images[selectedImage]}</span>
          </div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <span className="product-emoji">{image}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          {/* Badge */}
          {product.badge && (
            <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
              {product.badge}
            </span>
          )}

          {/* Product Name */}
          <h1 className="product-title">{product.name}</h1>

          {/* Rating */}
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">
              {product.rating} ({product.reviews} reviews)
            </span>
            <Link to="#reviews" className="write-review">
              Write a review
            </Link>
          </div>

          {/* Price */}
          <div className="product-price">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">${product.originalPrice}</span>
                {discountPercentage > 0 && (
                  <span className="discount-badge">-{discountPercentage}%</span>
                )}
              </>
            )}
          </div>

          {/* Stock Status */}
          <div className="stock-status">
            {product.inStock ? (
              <span className="in-stock">✅ In Stock ({product.stockCount} available)</span>
            ) : (
              <span className="out-stock">❌ Out of Stock</span>
            )}
          </div>

          {/* Short Description */}
          <p className="short-description">{product.description}</p>

          {/* Product Options */}
          <div className="product-options">
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="option-group">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="option-group">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="option-group">
              <label>Quantity:</label>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input"
                  min="1"
                  max={product.stockCount}
                />
                <button 
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              🛒 Add to Cart
            </button>
            <button className="buy-now-btn">
              ⚡ Buy Now
            </button>
            <button className="wishlist-btn">
              ❤️ Add to Wishlist
            </button>
          </div>

          {/* Product Features */}
          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="product-details-tabs">
        <div className="tab-buttons">
          {['description', 'specifications', 'reviews'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-content">
              <h3>Product Description</h3>
              <p>{product.description}</p>
              <p>Our wireless headphones are designed for the modern listener who demands quality, comfort, and convenience. Whether you're commuting, working out, or relaxing at home, these headphones deliver an exceptional audio experience.</p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="specifications-content">
              <h3>Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-label">{key}:</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content" id="reviews">
              <h3>Customer Reviews</h3>
              <div className="reviews-summary">
                <div className="average-rating">
                  <span className="rating-number">{product.rating}</span>
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="total-reviews">Based on {product.reviews} reviews</span>
                </div>
              </div>
              
              {/* Sample Reviews */}
              <div className="reviews-list">
                <div className="review-item">
                  <div className="review-header">
                    <span className="reviewer-name">John D.</span>
                    <div className="review-rating">
                      {renderStars(5)}
                    </div>
                    <span className="review-date">2 days ago</span>
                  </div>
                  <p className="review-text">Excellent headphones! The sound quality is amazing and the noise cancellation works perfectly.</p>
                </div>
                
                <div className="review-item">
                  <div className="review-header">
                    <span className="reviewer-name">Sarah M.</span>
                    <div className="review-rating">
                      {renderStars(4)}
                    </div>
                    <span className="review-date">1 week ago</span>
                  </div>
                  <p className="review-text">Great value for money. Comfortable to wear for long periods. Battery life is as advertised.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
