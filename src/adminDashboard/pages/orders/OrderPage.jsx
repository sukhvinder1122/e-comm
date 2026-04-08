import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const OrderPage = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    shippingAddress: '',
    billingAddress: '',
    orderItems: [],
    subtotal: '0.00',
    tax: '0.00',
    shipping: '0.00',
    total: '0.00',
    paymentMethod: 'credit_card',
    orderStatus: 'pending',
    notes: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      productId: '',
      productName: '',
      quantity: '1',
      price: '0.00',
      total: '0.00'
    }
    setFormData(prev => ({
      ...prev,
      orderItems: [...prev.orderItems, newItem]
    }))
  }

  const handleRemoveItem = (itemId) => {
    setFormData(prev => ({
      ...prev,
      orderItems: prev.orderItems.filter(item => item.id !== itemId)
    }))
  }

  const handleItemChange = (itemId, field, value) => {
    setFormData(prev => ({
      ...prev,
      orderItems: prev.orderItems.map(item => {
        if (item.id === itemId) {
          const updatedItem = { ...item, [field]: value }
          if (field === 'quantity' || field === 'price') {
            const quantity = parseFloat(updatedItem.quantity) || 0
            const price = parseFloat(updatedItem.price) || 0
            updatedItem.total = (quantity * price).toFixed(2)
          }
          return updatedItem
        }
        return item
      })
    }))
  }

  const calculateTotals = () => {
    const subtotal = formData.orderItems.reduce((sum, item) => sum + parseFloat(item.total || 0), 0)
    const tax = subtotal * 0.08 // 8% tax
    const shipping = formData.orderItems.length > 0 ? 10.00 : 0
    const total = subtotal + tax + shipping
    
    setFormData(prev => ({
      ...prev,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: shipping.toFixed(2),
      total: total.toFixed(2)
    }))
  }

  React.useEffect(() => {
    calculateTotals()
  }, [formData.orderItems])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('New order:', formData)
      alert('Order created successfully!')
      navigate('/orders')
    } catch (err) {
      setError('Failed to create order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    navigate('/dashboard')
  }

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <div className="page-title">Create Order</div>
          <div className="page-sub">Add a new customer order to the system</div>
        </div>
        <div className="topbar-right">
          <button className="btn-secondary" onClick={handleCancel}>Cancel</button>
          <button className="btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating...' : 'Create Order →'}
          </button>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-grid">
            {/* Left Column */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Customer Information</h3>
                
                <div className="form-group">
                  <label htmlFor="customerName" className="form-label">Customer Name *</label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter customer name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customerEmail" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="customer@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customerPhone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="customerPhone"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="shippingAddress" className="form-label">Shipping Address *</label>
                  <textarea
                    id="shippingAddress"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="Enter complete shipping address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="billingAddress" className="form-label">Billing Address</label>
                  <textarea
                    id="billingAddress"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="Enter billing address (same as shipping if left blank)"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">Order Details</h3>
                
                <div className="form-group">
                  <label htmlFor="paymentMethod" className="form-label">Payment Method *</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="cash_on_delivery">Cash on Delivery</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="orderStatus" className="form-label">Order Status</label>
                  <select
                    id="orderStatus"
                    name="orderStatus"
                    value={formData.orderStatus}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="notes" className="form-label">Order Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="Add any special instructions or notes"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Order Items</h3>
                
                <div className="form-group">
                  <button type="button" className="btn" onClick={handleAddItem} style={{ width: '100%', marginBottom: '16px' }}>
                    + Add Item
                  </button>
                </div>

                {formData.orderItems.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 0', color: '#a0aec0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
                    <p>No items added yet</p>
                    <p style={{ fontSize: '14px', marginTop: '8px' }}>Click "Add Item" to start building the order</p>
                  </div>
                ) : (
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {formData.orderItems.map((item, index) => (
                      <div key={item.id} style={{ 
                        background: '#0f1419', 
                        border: '1px solid #2d3748', 
                        borderRadius: '8px', 
                        padding: '16px', 
                        marginBottom: '12px' 
                      }}>
                        <div className="form-row" style={{ marginBottom: '12px' }}>
                          <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                            <input
                              type="text"
                              placeholder="Product name"
                              value={item.productName}
                              onChange={(e) => handleItemChange(item.id, 'productName', e.target.value)}
                              className="form-input"
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveItem(item.id)}
                            className="btn-secondary"
                            style={{ padding: '8px 12px', fontSize: '12px' }}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="form-row">
                          <div className="form-group half" style={{ marginBottom: 0 }}>
                            <input
                              type="number"
                              placeholder="Qty"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                              className="form-input"
                              min="1"
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                          <div className="form-group half" style={{ marginBottom: 0 }}>
                            <input
                              type="number"
                              placeholder="Price"
                              value={item.price}
                              onChange={(e) => handleItemChange(item.id, 'price', e.target.value)}
                              className="form-input"
                              step="0.01"
                              min="0"
                              style={{ fontSize: '14px' }}
                            />
                          </div>
                          <div className="form-group half" style={{ marginBottom: 0 }}>
                            <input
                              type="text"
                              placeholder="Total"
                              value={`$${item.total}`}
                              readOnly
                              className="form-input"
                              style={{ fontSize: '14px', background: '#1a2235' }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-section">
                <h3 className="section-title">Order Summary</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span className="form-label" style={{ margin: 0 }}>Subtotal:</span>
                    <span>${formData.subtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span className="form-label" style={{ margin: 0 }}>Tax (8%):</span>
                    <span>${formData.tax}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span className="form-label" style={{ margin: 0 }}>Shipping:</span>
                    <span>${formData.shipping}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    paddingTop: '12px', 
                    borderTop: '1px solid #2d3748' 
                  }}>
                    <span>Total:</span>
                    <span style={{ color: '#22d98a' }}>${formData.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#ef4444',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn" disabled={loading || formData.orderItems.length === 0}>
              {loading ? 'Creating...' : 'Create Order →'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
