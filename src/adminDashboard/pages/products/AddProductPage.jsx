import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AddProductPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    sku: '',
    brand: '',
    weight: '',
    dimensions: '',
    status: 'active'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Product data:', formData)
    // Handle form submission here
    alert('Product added successfully!')
    navigate('/products')
  }

  const handleCancel = () => {
    navigate('/products')
  }

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <div className="page-title">Add Product</div>
          <div className="page-sub">Create a new product for your catalog</div>
        </div>
        <div className="topbar-right">
          <button className="btn-secondary" onClick={handleCancel}>Cancel</button>
          <button className="btn" onClick={handleSubmit}>Save Product →</button>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-grid">
            {/* Left Column */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Basic Information</h3>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Product Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sku" className="form-label">SKU *</label>
                  <input
                    type="text"
                    id="sku"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., WH-001"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category" className="form-label">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="wearables">Wearables</option>
                    <option value="accessories">Accessories</option>
                    <option value="mobile">Mobile</option>
                    <option value="audio">Audio</option>
                    <option value="gaming">Gaming</option>
                    <option value="smart-home">Smart Home</option>
                    <option value="office">Office</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="brand" className="form-label">Brand</label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., Sony, Apple, Samsung"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="4"
                    placeholder="Describe your product features and benefits..."
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Pricing & Inventory</h3>
                
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="price" className="form-label">Price ($) *</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>

                  <div className="form-group half">
                    <label htmlFor="stock" className="form-label">Stock Quantity *</label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="0"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="status" className="form-label">Product Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">Shipping Information</h3>
                
                <div className="form-group">
                  <label htmlFor="weight" className="form-label">Weight (lbs)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dimensions" className="form-label">Dimensions (L x W x H)</label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., 10 x 8 x 4 inches"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">Product Images</h3>
                
                <div className="image-upload">
                  <div className="upload-area">
                    <div className="upload-icon">📷</div>
                    <p className="upload-text">Click to upload or drag and drop</p>
                    <p className="upload-subtext">PNG, JPG up to 10MB</p>
                    <input type="file" className="file-input" accept="image/*" multiple />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn">
              Save Product →
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
