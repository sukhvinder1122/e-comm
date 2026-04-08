import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const ProductDetailPage = () => {
  const { id } = useParams()
  
  // Mock product data - in real app, this would come from API
  const [product] = useState({
    id: id,
    name: 'Wireless Headphones',
    sku: 'WH-001',
    category: 'Electronics',
    brand: 'AudioTech',
    price: 299.99,
    stock: 42,
    status: 'active',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life. Features include Bluetooth 5.0, quick charge, and premium sound quality.',
    weight: '0.5 lbs',
    dimensions: '7.5 x 6.7 x 3.1 inches',
    images: [
      'https://via.placeholder.com/600x400/1a1f2e/e2e8f0?text=Wireless+Headphones',
      'https://via.placeholder.com/600x400/1a1f2e/e2e8f0?text=Side+View',
      'https://via.placeholder.com/600x400/1a1f2e/e2e8f0?text=Detail+View'
    ],
    specifications: {
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Battery Life': '30 hours with ANC, 40 hours without',
      'Charging': 'USB-C fast charging (10 min = 3 hours)',
      'Drivers': '40mm dynamic drivers',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohms',
      'Noise Cancellation': 'Active Noise Cancellation (ANC)',
      'Microphone': 'Built-in microphone for calls',
      'Controls': 'Touch controls on earcups',
      'Materials': 'Premium aluminum and memory foam'
    },
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable all-day wear',
      'Quick charge capability',
      'Bluetooth 5.0 connectivity',
      'Built-in microphone',
      'Touch controls'
    ],
    reviews: [
      {
        id: 1,
        name: 'John Smith',
        rating: 5,
        date: '2026-03-15',
        comment: 'Amazing sound quality! The noise cancellation is incredible. Worth every penny.'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        rating: 4,
        date: '2026-03-10',
        comment: 'Great headphones, very comfortable. Battery life is as advertised.'
      },
      {
        id: 3,
        name: 'Mike Davis',
        rating: 5,
        date: '2026-03-05',
        comment: 'Best purchase I have made this year. Sound quality is exceptional.'
      }
    ],
    sales: {
      totalSold: 42,
      thisMonth: 15,
      lastMonth: 12,
      revenue: 12599.58
    }
  })

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`)
  }

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const averageRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <div className="page-title">Product Details</div>
          <div className="page-sub">View and manage product information</div>
        </div>
        <div className="topbar-right">
          <Link to="/products" className="btn-secondary" style={{ textDecoration: 'none' }}>
            ← Back to Products
          </Link>
          <Link to={`/edit-product/${product.id}`} className="btn" style={{ textDecoration: 'none' }}>
            Edit Product →
          </Link>
        </div>
      </div>

      {/* Product Overview */}
      <div className="mid-row">
        <div className="card" style={{ gridColumn: '1 / -1', padding: '32px' }}>
          <div className="form-grid">
            {/* Left Column - Images */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Product Images</h3>
                <div style={{ marginBottom: '20px' }}>
                  <img 
                    src={product.images[selectedImage]} 
                    alt={product.name}
                    style={{ 
                      width: '100%', 
                      height: '300px', 
                      objectFit: 'cover',
                      borderRadius: '8px',
                      background: '#0f1419'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        border: selectedImage === index ? '2px solid #22d98a' : '1px solid #2d3748'
                      }}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Product Information</h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                    {product.name}
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#22d98a' }}>
                      ${product.price}
                    </span>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '20px', 
                      fontSize: '12px', 
                      fontWeight: '700',
                      background: 'rgba(34,217,138,.12)',
                      color: '#22d98a',
                      fontFamily: 'DM Mono, monospace'
                    }}>
                      {product.status.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span>{renderStars(Math.round(averageRating))}</span>
                    <span style={{ color: '#a0aec0', fontSize: '14px' }}>
                      ({product.reviews.length} reviews)
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">SKU</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {product.sku}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label className="form-label">Category</label>
                    <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                      {product.category}
                    </div>
                  </div>
                  <div className="form-group half">
                    <label className="form-label">Brand</label>
                    <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                      {product.brand}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label className="form-label">Stock</label>
                    <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                      {product.stock} units
                    </div>
                  </div>
                  <div className="form-group half">
                    <label className="form-label">Weight</label>
                    <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                      {product.weight}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Dimensions</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {product.dimensions}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Description</label>
                  <div className="form-textarea" style={{ 
                    background: '#0f1419', 
                    color: '#a0aec0',
                    minHeight: '80px',
                    resize: 'none'
                  }}>
                    {product.description}
                  </div>
                </div>

                <div className="form-actions" style={{ borderTop: 'none', paddingTop: '20px' }}>
                  <div className="form-row" style={{ alignItems: 'center', gap: '12px' }}>
                    <label className="form-label" style={{ margin: 0 }}>Quantity:</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="form-input"
                      style={{ width: '80px', textAlign: 'center' }}
                      min="1"
                      max={product.stock}
                    />
                    <button className="btn" onClick={handleAddToCart}>
                      Add to Cart →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="bottom-row">
        <div className="card" style={{ gridColumn: '1 / -1', padding: '32px' }}>
          <div className="card-title">Product Details</div>
          
          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {['description', 'specifications', 'features', 'reviews'].map(tab => (
              <button
                key={tab}
                className={`btn-secondary ${activeTab === tab ? 'btn' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  textTransform: 'capitalize',
                  background: activeTab === tab ? '#22d98a' : '#2d3748',
                  color: activeTab === tab ? '#0a0e1a' : '#a0aec0',
                  border: 'none'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ minHeight: '300px' }}>
            {activeTab === 'description' && (
              <div>
                <h4 style={{ marginBottom: '12px' }}>Product Description</h4>
                <p style={{ lineHeight: '1.6', color: '#a0aec0' }}>
                  {product.description}
                </p>
                <p style={{ lineHeight: '1.6', color: '#a0aec0', marginTop: '16px' }}>
                  These premium wireless headphones are designed for audiophiles who demand the best in sound quality and comfort. With advanced active noise cancellation technology, you can immerse yourself in your music without distractions. The 30-hour battery life ensures you can enjoy your music all day long, while the quick charge feature gives you 3 hours of playback with just 10 minutes of charging.
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h4 style={{ marginBottom: '16px' }}>Technical Specifications</h4>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="topic-row" style={{ padding: '8px 0' }}>
                      <div className="topic-info" style={{ flex: '0 0 200px' }}>
                        <div className="topic-name" style={{ fontSize: '14px' }}>{key}</div>
                      </div>
                      <div className="topic-info" style={{ flex: 1 }}>
                        <div className="topic-sub" style={{ fontSize: '14px', color: '#e2e8f0' }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h4 style={{ marginBottom: '16px' }}>Key Features</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {product.features.map((feature, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      padding: '8px',
                      background: '#0f1419',
                      borderRadius: '4px'
                    }}>
                      <span style={{ color: '#22d98a' }}>✓</span>
                      <span style={{ color: '#e2e8f0' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h4 style={{ marginBottom: '16px' }}>Customer Reviews</h4>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '24px', fontWeight: '700' }}>
                      {averageRating.toFixed(1)}
                    </span>
                    <span>{renderStars(Math.round(averageRating))}</span>
                    <span style={{ color: '#a0aec0' }}>
                      Based on {product.reviews.length} reviews
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {product.reviews.map(review => (
                    <div key={review.id} style={{ 
                      background: '#0f1419', 
                      padding: '16px', 
                      borderRadius: '8px' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ fontWeight: '600', color: '#e2e8f0' }}>{review.name}</div>
                        <div style={{ color: '#a0aec0', fontSize: '12px' }}>{review.date}</div>
                      </div>
                      <div style={{ marginBottom: '8px' }}>{renderStars(review.rating)}</div>
                      <div style={{ color: '#a0aec0', lineHeight: '1.5' }}>{review.comment}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sales Analytics */}
      <div className="bottom-row">
        <div className="card" style={{ padding: '24px' }}>
          <div className="card-title">Sales Performance</div>
          <div className="stats-grid" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
            <div className="stat-card g">
              <div className="stat-label">Total Sold</div>
              <div className="stat-val g">{product.sales.totalSold}</div>
              <div className="stat-change">all time · <span>since launch</span></div>
            </div>
            <div className="stat-card b">
              <div className="stat-label">This Month</div>
              <div className="stat-val b">{product.sales.thisMonth}</div>
              <div className="stat-change">units · <span>+25% vs last month</span></div>
            </div>
            <div className="stat-card a">
              <div className="stat-label">Revenue</div>
              <div className="stat-val a">${product.sales.revenue.toFixed(2)}</div>
              <div className="stat-change">total · <span>from this product</span></div>
            </div>
          </div>
        </div>

        <div className="card progress-card" style={{ padding: '24px' }}>
          <div className="card-title" style={{width:'100%'}}>Inventory Status</div>
          <div className="ring-container">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#1a2235" strokeWidth="9"/>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#22d98a" strokeWidth="9"
                strokeDasharray="251.2" strokeDashoffset="180" strokeLinecap="round"/>
            </svg>
            <div className="ring-center">
              <div className="ring-pct">28%</div>
              <div className="ring-sub">Stock</div>
            </div>
          </div>
          <div className="skills-label">Stock Level</div>
          <div className="pill-grid">
            <div className="pill done">In Stock</div>
            <div className="pill active">Low Stock Alert</div>
          </div>
          <div className="pill-legend">
            <div><span className="pill-dot" style={{background:'#22d98a'}}></span>Available</div>
            <div><span className="pill-dot" style={{background:'#f9a825'}}></span>Restock Soon</div>
          </div>
        </div>
      </div>
    </main>
  )
}
