import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const OrderDetailPage = () => {
  const { id } = useParams()
  
  // Mock order data - in real app, this would come from API
  const [order] = useState({
    id: 'ORD-001',
    customerName: 'John Smith',
    customerEmail: 'john.smith@email.com',
    customerPhone: '(555) 123-4567',
    orderDate: '2026-04-05',
    orderTime: '14:30',
    status: 'completed',
    paymentMethod: 'credit_card',
    paymentStatus: 'paid',
    shippingAddress: '123 Main St, Apt 4B, New York, NY 10001',
    billingAddress: '123 Main St, Apt 4B, New York, NY 10001',
    subtotal: 299.99,
    tax: 24.00,
    shipping: 10.00,
    total: 333.99,
    trackingNumber: '1Z999AA10123456784',
    carrier: 'UPS',
    estimatedDelivery: '2026-04-08',
    notes: 'Customer requested gift wrapping and express shipping',
    items: [
      {
        id: 1,
        productId: 'WH-001',
        productName: 'Wireless Headphones',
        brand: 'AudioTech',
        sku: 'WH-001',
        quantity: 1,
        price: 299.99,
        total: 299.99,
        image: 'https://via.placeholder.com/80x80/1a1f2e/e2e8f0?text=Headphones'
      }
    ],
    timeline: [
      {
        id: 1,
        status: 'order_placed',
        title: 'Order Placed',
        description: 'Order successfully placed and confirmed',
        timestamp: '2026-04-05 14:30',
        completed: true
      },
      {
        id: 2,
        status: 'payment_confirmed',
        title: 'Payment Confirmed',
        description: 'Payment of $333.99 successfully processed',
        timestamp: '2026-04-05 14:32',
        completed: true
      },
      {
        id: 3,
        status: 'processing',
        title: 'Order Processing',
        description: 'Order is being prepared for shipment',
        timestamp: '2026-04-05 16:00',
        completed: true
      },
      {
        id: 4,
        status: 'shipped',
        title: 'Order Shipped',
        description: 'Order shipped via UPS with tracking number',
        timestamp: '2026-04-06 09:15',
        completed: true
      },
      {
        id: 5,
        status: 'delivered',
        title: 'Order Delivered',
        description: 'Order successfully delivered to customer',
        timestamp: '2026-04-08 14:00',
        completed: true
      }
    ]
  })

  const getStatusColor = (status) => {
    const colors = {
      pending: '#f9a825',
      processing: '#4f9cf9',
      shipped: '#a78bfa',
      delivered: '#22d98a',
      cancelled: '#ef4444'
    }
    return colors[status] || '#5a6a80'
  }

  const getStatusBg = (status) => {
    const colors = {
      pending: 'rgba(249,168,37,.1)',
      processing: 'rgba(79,156,249,.15)',
      shipped: 'rgba(167,139,250,.15)',
      delivered: 'rgba(34,217,138,.15)',
      cancelled: 'rgba(239,68,68,.1)'
    }
    return colors[status] || 'rgba(90,106,128,.1)'
  }

  const getPaymentIcon = (method) => {
    const icons = {
      credit_card: '💳',
      debit_card: '💳',
      paypal: '🅿️',
      bank_transfer: '🏦',
      cash_on_delivery: '💵'
    }
    return icons[method] || '💳'
  }

  const getTimelineIcon = (status) => {
    const icons = {
      order_placed: '📝',
      payment_confirmed: '✅',
      processing: '⚙️',
      shipped: '📦',
      delivered: '✅'
    }
    return icons[status] || '📝'
  }

  const handleUpdateStatus = (newStatus) => {
    alert(`Order status updated to: ${newStatus}`)
  }

  const handleSendEmail = () => {
    alert(`Order confirmation email sent to ${order.customerEmail}`)
  }

  const handlePrintInvoice = () => {
    alert('Invoice printed successfully!')
  }

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <div className="page-title">Order Details</div>
          <div className="page-sub">View and manage order information</div>
        </div>
        <div className="topbar-right">
          <Link to="/orders" className="btn-secondary" style={{ textDecoration: 'none' }}>
            ← Back to Orders
          </Link>
          <button className="btn" onClick={handlePrintInvoice}>
            Print Invoice →
          </button>
        </div>
      </div>

      {/* Order Overview */}
      <div className="mid-row">
        <div className="card" style={{ gridColumn: '1 / -1', padding: '32px' }}>
          <div className="form-grid">
            {/* Left Column - Order Info */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Order Information</h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                    {order.id}
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '20px', 
                      fontSize: '12px', 
                      fontWeight: '700',
                      background: getStatusBg(order.status),
                      color: getStatusColor(order.status),
                      fontFamily: 'DM Mono, monospace'
                    }}>
                      {order.status.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#22d98a' }}>
                      ${order.total}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <span>{getPaymentIcon(order.paymentMethod)}</span>
                    <span style={{ color: '#a0aec0', fontSize: '14px' }}>
                      {order.paymentMethod.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Order Date</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.orderDate} at {order.orderTime}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Payment Status</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.paymentStatus.toUpperCase()}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Tracking Number</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.trackingNumber} ({order.carrier})
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Estimated Delivery</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.estimatedDelivery}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Order Notes</label>
                  <div className="form-textarea" style={{ 
                    background: '#0f1419', 
                    color: '#a0aec0',
                    minHeight: '60px',
                    resize: 'none'
                  }}>
                    {order.notes}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Customer Info */}
            <div className="form-column">
              <div className="form-section">
                <h3 className="section-title">Customer Information</h3>
                
                <div className="form-group">
                  <label className="form-label">Customer Name</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.customerName}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.customerEmail}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <div className="form-input" style={{ background: '#0f1419', color: '#a0aec0' }}>
                    {order.customerPhone}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Shipping Address</label>
                  <div className="form-textarea" style={{ 
                    background: '#0f1419', 
                    color: '#a0aec0',
                    minHeight: '60px',
                    resize: 'none'
                  }}>
                    {order.shippingAddress}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Billing Address</label>
                  <div className="form-textarea" style={{ 
                    background: '#0f1419', 
                    color: '#a0aec0',
                    minHeight: '60px',
                    resize: 'none'
                  }}>
                    {order.billingAddress}
                  </div>
                </div>

                <div className="form-actions" style={{ borderTop: 'none', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn-secondary" onClick={handleSendEmail}>
                      📧 Send Email
                    </button>
                    <select 
                      className="form-select" 
                      style={{ width: 'auto' }}
                      onChange={(e) => handleUpdateStatus(e.target.value)}
                      defaultValue={order.status}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bottom-row">
        <div className="card" style={{ gridColumn: '1 / -1', padding: '32px' }}>
          <div className="card-title">Order Items</div>
          
          <div style={{ marginBottom: '20px' }}>
            {order.items.map((item, index) => (
              <div key={item.id} className="topic-row" style={{ padding: '16px 0' }}>
                <div style={{ width: '80px', height: '80px', marginRight: '16px' }}>
                  <img 
                    src={item.image} 
                    alt={item.productName}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                </div>
                <div className="topic-info" style={{ flex: 1 }}>
                  <div className="topic-name">{item.productName}</div>
                  <div className="topic-sub">{item.brand} · SKU: {item.sku}</div>
                </div>
                <div style={{ textAlign: 'center', minWidth: '80px' }}>
                  <div style={{ fontSize: '14px', color: '#a0aec0' }}>Quantity</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#e2e8f0' }}>
                    {item.quantity}
                  </div>
                </div>
                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <div style={{ fontSize: '14px', color: '#a0aec0' }}>Price</div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#e2e8f0' }}>
                    ${item.price}
                  </div>
                </div>
                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <div style={{ fontSize: '14px', color: '#a0aec0' }}>Total</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#22d98a' }}>
                    ${item.total}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div style={{ 
            background: '#0f1419', 
            padding: '20px', 
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span className="form-label" style={{ margin: 0 }}>Subtotal:</span>
                <span>${order.subtotal}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span className="form-label" style={{ margin: 0 }}>Tax (8%):</span>
                <span>${order.tax}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span className="form-label" style={{ margin: 0 }}>Shipping:</span>
                <span>${order.shipping}</span>
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
                <span style={{ color: '#22d98a' }}>${order.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bottom-row">
        <div className="card" style={{ padding: '24px' }}>
          <div className="card-title">Order Timeline</div>
          
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {order.timeline.map((event, index) => (
              <div key={event.id} style={{ 
                position: 'relative', 
                marginBottom: '24px',
                opacity: event.completed ? 1 : 0.5
              }}>
                {/* Timeline Line */}
                {index < order.timeline.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '-30px',
                    top: '30px',
                    width: '2px',
                    height: '40px',
                    background: '#2d3748'
                  }} />
                )}
                
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-35px',
                  top: '5px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: event.completed ? '#22d98a' : '#2d3748',
                  border: `2px solid ${event.completed ? '#22d98a' : '#2d3748'}`
                }} />
                
                {/* Timeline Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '16px' }}>{getTimelineIcon(event.status)}</span>
                    <div style={{ fontWeight: '600', color: '#e2e8f0' }}>{event.title}</div>
                  </div>
                  <div style={{ color: '#a0aec0', fontSize: '14px', marginBottom: '4px' }}>
                    {event.description}
                  </div>
                  <div style={{ color: '#5a6a80', fontSize: '12px' }}>
                    {event.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card progress-card" style={{ padding: '24px' }}>
          <div className="card-title" style={{width:'100%'}}>Order Actions</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button className="btn" style={{ width: '100%' }}>
              📧 Send Confirmation Email
            </button>
            <button className="btn-secondary" style={{ width: '100%' }}>
              📦 Update Tracking
            </button>
            <button className="btn-secondary" style={{ width: '100%' }}>
              💬 Contact Customer
            </button>
            <button className="btn-secondary" style={{ width: '100%' }}>
              📄 Generate Invoice
            </button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="skills-label">Quick Actions</div>
            <div className="pill-grid">
              <div className="pill done">Refund</div>
              <div className="pill active">Exchange</div>
              <div className="pill next">Return</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
