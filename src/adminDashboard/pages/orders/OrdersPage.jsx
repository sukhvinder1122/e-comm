import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OrdersPage = () => {
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock order data
  const [orders] = useState([
    {
      id: 'ORD-001',
      customerName: 'John Smith',
      customerEmail: 'john.smith@email.com',
      date: '2026-04-05',
      total: 299.99,
      status: 'completed',
      items: 1,
      paymentMethod: 'credit_card'
    },
    {
      id: 'ORD-002',
      customerName: 'Sarah Johnson',
      customerEmail: 'sarah.j@email.com',
      date: '2026-04-05',
      total: 749.98,
      status: 'processing',
      items: 2,
      paymentMethod: 'paypal'
    },
    {
      id: 'ORD-003',
      customerName: 'Mike Davis',
      customerEmail: 'mike.davis@email.com',
      date: '2026-04-04',
      total: 1299.97,
      status: 'shipped',
      items: 3,
      paymentMethod: 'debit_card'
    },
    {
      id: 'ORD-004',
      customerName: 'Emily Wilson',
      customerEmail: 'emily.w@email.com',
      date: '2026-04-04',
      total: 89.99,
      status: 'pending',
      items: 1,
      paymentMethod: 'bank_transfer'
    },
    {
      id: 'ORD-005',
      customerName: 'Robert Brown',
      customerEmail: 'r.brown@email.com',
      date: '2026-04-03',
      total: 549.95,
      status: 'completed',
      items: 2,
      paymentMethod: 'credit_card'
    },
    {
      id: 'ORD-006',
      customerName: 'Lisa Anderson',
      customerEmail: 'lisa.a@email.com',
      date: '2026-04-03',
      total: 199.99,
      status: 'cancelled',
      items: 1,
      paymentMethod: 'cash_on_delivery'
    }
  ])

  const getStatusColor = (status) => {
    const colors = {
      completed: '#22d98a',
      processing: '#4f9cf9',
      shipped: '#a78bfa',
      pending: '#f9a825',
      cancelled: '#ef4444'
    }
    return colors[status] || '#5a6a80'
  }

  const getStatusBg = (status) => {
    const colors = {
      completed: 'rgba(34,217,138,.15)',
      processing: 'rgba(79,156,249,.15)',
      shipped: 'rgba(167,139,250,.15)',
      pending: 'rgba(249,168,37,.1)',
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

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const statusCounts = {
    all: orders.length,
    completed: orders.filter(o => o.status === 'completed').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    pending: orders.filter(o => o.status === 'pending').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  }

  const totalRevenue = orders
    .filter(o => o.status !== 'cancelled')
    .reduce((sum, order) => sum + order.total, 0)

  const avgOrderValue = totalRevenue / orders.filter(o => o.status !== 'cancelled').length

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <div className="page-title">Orders</div>
          <div className="page-sub">Manage customer orders and track shipments</div>
        </div>
        <div className="topbar-right">
          <div className="badge">● {statusCounts.processing} Processing</div>
          <Link to="/create-order" className="btn" style={{ textDecoration: 'none' }}>Create Order →</Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card g">
          <div className="stat-label">Total Orders</div>
          <div className="stat-val g">{statusCounts.all}</div>
          <div className="stat-change">this month · <span>+18% growth</span></div>
        </div>
        <div className="stat-card b">
          <div className="stat-label">Revenue</div>
          <div className="stat-val b">${totalRevenue.toFixed(2)}</div>
          <div className="stat-change">total · <span>+12% vs last month</span></div>
        </div>
        <div className="stat-card a">
          <div className="stat-label">Avg Order Value</div>
          <div className="stat-val a">${avgOrderValue.toFixed(2)}</div>
          <div className="stat-change">per order · <span>+5% increase</span></div>
        </div>
        <div className="stat-card p">
          <div className="stat-label">Pending</div>
          <div className="stat-val p">{statusCounts.pending}</div>
          <div className="stat-change">awaiting · <span>processing</span></div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mid-row">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title">Order Management <span className="see-all">Export →</span></div>
          
          {/* Search Bar */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search orders by customer name, email, or order ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
              style={{ width: '100%', maxWidth: '400px' }}
            />
          </div>

          {/* Status Filters */}
          <div className="pill-grid" style={{ marginBottom: '20px' }}>
            <button
              className={`pill ${filterStatus === 'all' ? 'done' : 'locked'}`}
              onClick={() => setFilterStatus('all')}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              All ({statusCounts.all})
            </button>
            <button
              className={`pill ${filterStatus === 'completed' ? 'done' : 'locked'}`}
              onClick={() => setFilterStatus('completed')}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Completed ({statusCounts.completed})
            </button>
            <button
              className={`pill ${filterStatus === 'processing' ? 'active' : 'locked'}`}
              onClick={() => setFilterStatus('processing')}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Processing ({statusCounts.processing})
            </button>
            <button
              className={`pill ${filterStatus === 'shipped' ? 'next' : 'locked'}`}
              onClick={() => setFilterStatus('shipped')}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Shipped ({statusCounts.shipped})
            </button>
            <button
              className={`pill ${filterStatus === 'pending' ? 'next' : 'locked'}`}
              onClick={() => setFilterStatus('pending')}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Pending ({statusCounts.pending})
            </button>
            <button
              className={`pill ${filterStatus === 'cancelled' ? 'locked' : 'locked'}`}
              onClick={() => setFilterStatus('cancelled')}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Cancelled ({statusCounts.cancelled})
            </button>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bottom-row">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title">Recent Orders <span className="see-all">View all →</span></div>
          
          {filteredOrders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#a0aec0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
              <p>No orders found</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div>
              {filteredOrders.map((order, index) => (
                <div key={order.id} className="topic-row">
                  <div className="topic-num" style={{ 
                    background: getStatusBg(order.status), 
                    color: getStatusColor(order.status),
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {getPaymentIcon(order.paymentMethod)}
                  </div>
                  <div className="topic-info">
                    <Link to={`/order/${order.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="topic-name">{order.id} — {order.customerName}</div>
                      <div className="topic-sub">{order.customerEmail} · {order.items} items</div>
                    </Link>
                  </div>
                  <div className="topic-bar-wrap">
                    <div className="topic-bar-bg">
                      <div className="topic-bar-fill" style={{ 
                        width: `${Math.min((order.total / 1500) * 100, 100)}%`, 
                        background: getStatusColor(order.status) 
                      }}></div>
                    </div>
                    <div className="topic-pct">${order.total}</div>
                  </div>
                  <div style={{ 
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    background: getStatusBg(order.status),
                    color: getStatusColor(order.status),
                    fontFamily: 'DM Mono, monospace',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>
                    {order.status}
                  </div>
                  <div className="topic-pct" style={{ minWidth: '80px', textAlign: 'right' }}>
                    {order.date}
                  </div>
                  <Link to={`/order/${order.id}`} className="btn" style={{ 
                    textDecoration: 'none', 
                    padding: '6px 12px', 
                    fontSize: '11px',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Order Activity Timeline */}
      <div className="bottom-row">
        <div className="card">
          <div className="card-title">Recent Activity <span className="see-all">View all →</span></div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#22d98a'}}></div>
            <div className="tl-body">
              <div className="tl-title">Order ORD-002 Completed</div>
              <div className="tl-sub">Sarah Johnson · $749.98 · 2 items</div>
            </div>
            <div className="tl-time">2h ago</div>
          </div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#4f9cf9'}}></div>
            <div className="tl-body">
              <div className="tl-title">Order ORD-003 Shipped</div>
              <div className="tl-sub">Mike Davis · $1,299.97 · 3 items</div>
            </div>
            <div className="tl-time">4h ago</div>
          </div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#f9a825'}}></div>
            <div className="tl-body">
              <div className="tl-title">New Order ORD-004 Received</div>
              <div className="tl-sub">Emily Wilson · $89.99 · 1 item</div>
            </div>
            <div className="tl-time">6h ago</div>
          </div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#a78bfa'}}></div>
            <div className="tl-body">
              <div className="tl-title">Order ORD-005 Processing</div>
              <div className="tl-sub">Robert Brown · $549.95 · 2 items</div>
            </div>
            <div className="tl-time">1 day ago</div>
          </div>
        </div>

        <div className="card progress-card">
          <div className="card-title" style={{width:'100%'}}>Order Status Distribution</div>
          <div className="skills-label">Current order breakdown</div>
          <div className="pill-grid">
            <div className="pill done">Completed</div>
            <div className="pill active">Processing</div>
            <div className="pill next">Shipped</div>
            <div className="pill next">Pending</div>
            <div className="pill locked">Cancelled</div>
          </div>
          <div className="pill-legend">
            <div><span className="pill-dot" style={{background:'#22d98a'}}></span>Completed ({statusCounts.completed})</div>
            <div><span className="pill-dot" style={{background:'#4f9cf9'}}></span>Processing ({statusCounts.processing})</div>
            <div><span className="pill-dot" style={{background:'#a78bfa'}}></span>Shipped ({statusCounts.shipped})</div>
            <div><span className="pill-dot" style={{background:'#f9a825'}}></span>Pending ({statusCounts.pending})</div>
            <div><span className="pill-dot" style={{background:'#ef4444'}}></span>Cancelled ({statusCounts.cancelled})</div>
          </div>
        </div>
      </div>
    </main>
  )
}
