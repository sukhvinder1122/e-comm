import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardPage = () => {
  return (
     <main className="main">
          <div className="topbar">
            <div>
              <div className="page-title">Ecommerce Dashboard</div>
              <div className="page-sub">Sales Overview · April 2026</div>
            </div>
            <div className="topbar-right">
              <div className="badge">● On Track</div>
              <button className="btn">View Report →</button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card g">
              <div className="stat-label">Total Sales</div>
              <div className="stat-val g">$24.5K</div>
              <div className="stat-change">of $50K target · <span>+12% this week</span></div>
            </div>
            <div className="stat-card b">
              <div className="stat-label">Orders</div>
              <div className="stat-val b">142</div>
              <div className="stat-change">avg <span>20.3/day</span></div>
            </div>
            <div className="stat-card a">
              <div className="stat-label">Customers</div>
              <div className="stat-val a">89</div>
              <div className="stat-change">new · <span>+15% growth</span></div>
            </div>
            <div className="stat-card p">
              <div className="stat-label">Conversion</div>
              <div className="stat-val p">3.2%</div>
              <div className="stat-change">rate · <span>above average</span></div>
            </div>
          </div>

          {/* Mid Row */}
          <div className="mid-row">
            <div className="card">
              <div className="card-title">Sales this week <span className="see-all">View all →</span></div>
              <div className="bar-chart">
                <div className="bar-wrap"><div className="bar" style={{height:'40%', background:'#4f9cf9', opacity:0.5}}></div><div className="bar-lbl">Mon</div></div>
                <div className="bar-wrap"><div className="bar" style={{height:'68%', background:'#4f9cf9'}}></div><div className="bar-lbl">Tue</div></div>
                <div className="bar-wrap"><div className="bar" style={{height:'52%', background:'#4f9cf9'}}></div><div className="bar-lbl">Wed</div></div>
                <div className="bar-wrap"><div className="bar" style={{height:'92%', background:'#22d98a'}}></div><div className="bar-lbl">Thu</div></div>
                <div className="bar-wrap"><div className="bar" style={{height:'58%', background:'#4f9cf9'}}></div><div className="bar-lbl">Fri</div></div>
                <div className="bar-wrap"><div className="bar" style={{height:'78%', background:'#4f9cf9'}}></div><div className="bar-lbl">Sat</div></div>
                <div className="bar-wrap"><div className="bar" style={{height:'30%', background:'#4f9cf9', opacity:0.4}}></div><div className="bar-lbl">Sun</div></div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Quick Actions <span className="see-all">More →</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/create-order" className="btn" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}>
                  + Create New Order
                </Link>
                <Link to="/orders" className="btn-secondary" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center', display: 'flex' }}>
                  📋 View All Orders
                </Link>
                <Link to="/add-product" className="btn-secondary" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center', display: 'flex' }}>
                  + Add Product
                </Link>
                <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  📊 Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <div className="card">
              <div className="card-title">Recent Orders <span className="see-all">History →</span></div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#22d98a'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Order #1024 — Completed</div>
                  <div className="tl-sub">Wireless Headphones · $299.99</div>
                </div>
                <div className="tl-time">2h ago</div>
              </div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#4f9cf9'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Order #1023 — Processing</div>
                  <div className="tl-sub">Smart Watch Pro · $449.99</div>
                </div>
                <div className="tl-time">3h ago</div>
              </div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#a78bfa'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Order #1022 — Shipped</div>
                  <div className="tl-sub">Laptop Stand + USB-C Hub · $89.98</div>
                </div>
                <div className="tl-time">5h ago</div>
              </div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#f9a825'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Bulk Order — Pending</div>
                  <div className="tl-sub">10x Wireless Headphones · $2,999.90</div>
                </div>
                <div className="tl-time">1 day ago</div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="card progress-card">
              <div className="card-title" style={{width:'100%'}}>Monthly Progress</div>
              <div className="ring-container">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1a2235" strokeWidth="9"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#22d98a" strokeWidth="9"
                    strokeDasharray="251.2" strokeDashoffset="168.3" strokeLinecap="round"/>
                </svg>
                <div className="ring-center">
                  <div className="ring-pct">49%</div>
                  <div className="ring-sub">$24.5K</div>
                </div>
              </div>
              <div className="skills-label">Product Categories</div>
              <div className="pill-grid">
                <div className="pill done">Electronics</div>
                <div className="pill done">Wearables</div>
                <div className="pill active">Accessories</div>
                <div className="pill active">Gaming</div>
                <div className="pill next">Audio</div>
                <div className="pill next">Mobile</div>
                <div className="pill locked">Smart Home</div>
                <div className="pill locked">Office</div>
              </div>
              <div className="pill-legend">
                <div><span className="pill-dot" style={{background:'#22d98a'}}></span>Top Seller</div>
                <div><span className="pill-dot" style={{background:'#4f9cf9'}}></span>Growing</div>
                <div><span className="pill-dot" style={{background:'#f9a825'}}></span>Potential</div>
                <div><span className="pill-dot" style={{background:'#5a6a80'}}></span>Coming Soon</div>
              </div>
            </div>
          </div>
        </main>
  )
}
