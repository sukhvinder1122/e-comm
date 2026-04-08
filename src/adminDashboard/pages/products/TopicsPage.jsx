import React from 'react'
import { Link } from 'react-router-dom'

export const TopicsPage = () => {
  return (
    <main className="main">
      <div className="topbar">
        <div>
          <div className="page-title">Products</div>
          <div className="page-sub">Manage your product catalog and inventory</div>
        </div>
        <div className="topbar-right">
          <div className="badge">● 156 Active</div>
          <Link to="/add-product" className="btn" style={{ textDecoration: 'none' }}>Add Product →</Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card g">
          <div className="stat-label">Total Products</div>
          <div className="stat-val g">156</div>
          <div className="stat-change">in catalog · <span>12 categories</span></div>
        </div>
        <div className="stat-card b">
          <div className="stat-label">In Stock</div>
          <div className="stat-val b">89</div>
          <div className="stat-change">available · <span>57% ready</span></div>
        </div>
        <div className="stat-card a">
          <div className="stat-label">Low Stock</div>
          <div className="stat-val a">23</div>
          <div className="stat-change">alert · <span>restock soon</span></div>
        </div>
        <div className="stat-card p">
          <div className="stat-label">Out of Stock</div>
          <div className="stat-val p">44</div>
          <div className="stat-change">unavailable · <span>reorder needed</span></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mid-row">
        <div className="card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title">Product Inventory <span className="see-all">Filter →</span></div>
          
          <div className="topic-row">
            <div className="topic-num" style={{background:'rgba(34,217,138,.15)', color:'#22d98a'}}>🎧</div>
            <div className="topic-info">
              <Link to="/product/1" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="topic-name">Wireless Headphones</div>
                <div className="topic-sub">Electronics · Premium audio experience</div>
              </Link>
            </div>
            <div className="topic-bar-wrap">
              <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'75%', background:'#22d98a'}}></div></div>
              <div className="topic-pct">42 units</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/product/1" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>View</Link>
              <Link to="/edit-product/1" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>Edit</Link>
            </div>
          </div>

          <div className="topic-row">
            <div className="topic-num" style={{background:'rgba(79,156,249,.15)', color:'#4f9cf9'}}>⌚</div>
            <div className="topic-info">
              <Link to="/product/2" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="topic-name">Smart Watch Pro</div>
                <div className="topic-sub">Wearables · Fitness and health tracking</div>
              </Link>
            </div>
            <div className="topic-bar-wrap">
              <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'45%', background:'#4f9cf9'}}></div></div>
              <div className="topic-pct">28 units</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/product/2" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>View</Link>
              <Link to="/edit-product/2" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>Edit</Link>
            </div>
          </div>

          <div className="topic-row">
            <div className="topic-num" style={{background:'rgba(34,217,138,.15)', color:'#22d98a'}}>💻</div>
            <div className="topic-info">
              <Link to="/product/3" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="topic-name">Laptop Stand</div>
                <div className="topic-sub">Accessories · Ergonomic design</div>
              </Link>
            </div>
            <div className="topic-bar-wrap">
              <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'90%', background:'#22d98a'}}></div></div>
              <div className="topic-pct">15 units</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/product/3" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>View</Link>
              <Link to="/edit-product/3" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>Edit</Link>
            </div>
          </div>

          <div className="topic-row">
            <div className="topic-num" style={{background:'rgba(249,168,37,.1)', color:'#f9a825'}}>🔌</div>
            <div className="topic-info">
              <Link to="/product/4" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="topic-name">USB-C Hub</div>
                <div className="topic-sub">Accessories · Multi-port connectivity</div>
              </Link>
            </div>
            <div className="topic-bar-wrap">
              <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'20%', background:'#f9a825'}}></div></div>
              <div className="topic-pct">3 units</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/product/4" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>View</Link>
              <Link to="/edit-product/4" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>Edit</Link>
            </div>
          </div>

          <div className="topic-row">
            <div className="topic-num" style={{background:'rgba(79,156,249,.15)', color:'#4f9cf9'}}>📱</div>
            <div className="topic-info">
              <Link to="/product/5" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="topic-name">Phone Case Premium</div>
                <div className="topic-sub">Mobile · Protection and style</div>
              </Link>
            </div>
            <div className="topic-bar-wrap">
              <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'60%', background:'#4f9cf9'}}></div></div>
              <div className="topic-pct">67 units</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/product/5" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>View</Link>
              <Link to="/edit-product/5" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>Edit</Link>
            </div>
          </div>

          <div className="topic-row">
            <div className="topic-num" style={{background:'rgba(249,168,37,.1)', color:'#f9a825'}}>🖱️</div>
            <div className="topic-info">
              <Link to="/product/6" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="topic-name">Wireless Mouse</div>
                <div className="topic-sub">Accessories · Ergonomic precision</div>
              </Link>
            </div>
            <div className="topic-bar-wrap">
              <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'10%', background:'#f9a825'}}></div></div>
              <div className="topic-pct">0 units</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/product/6" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>View</Link>
              <Link to="/edit-product/6" className="btn" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: '11px' }}>Edit</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Categories */}
      <div className="bottom-row">
        <div className="card progress-card">
          <div className="card-title" style={{width:'100%'}}>Product Categories</div>
          <div className="skills-label">Filter by category</div>
          <div className="pill-grid">
            <div className="pill done">Electronics</div>
            <div className="pill done">Wearables</div>
            <div className="pill active">Accessories</div>
            <div className="pill active">Mobile</div>
            <div className="pill next">Audio</div>
            <div className="pill next">Gaming</div>
            <div className="pill locked">Smart Home</div>
            <div className="pill locked">Office</div>
          </div>
          <div className="pill-legend">
            <div><span className="pill-dot" style={{background:'#22d98a'}}></span>Well Stocked</div>
            <div><span className="pill-dot" style={{background:'#4f9cf9'}}></span>Limited Stock</div>
            <div><span className="pill-dot" style={{background:'#f9a825'}}></span>Low Stock</div>
            <div><span className="pill-dot" style={{background:'#5a6a80'}}></span>Out of Stock</div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Recent Inventory Activity <span className="see-all">View all →</span></div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#22d98a'}}></div>
            <div className="tl-body">
              <div className="tl-title">Stock Added — Wireless Headphones</div>
              <div className="tl-sub">+50 units · Total: 42 available</div>
            </div>
            <div className="tl-time">1h ago</div>
          </div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#f9a825'}}></div>
            <div className="tl-body">
              <div className="tl-title">Low Stock Alert — USB-C Hub</div>
              <div className="tl-sub">Only 3 units left · Reorder needed</div>
            </div>
            <div className="tl-time">3h ago</div>
          </div>
          <div className="timeline-item">
            <div className="tl-dot" style={{background:'#4f9cf9'}}></div>
            <div className="tl-body">
              <div className="tl-title">New Product — Phone Case Premium</div>
              <div className="tl-sub">Added to catalog · 67 units stocked</div>
            </div>
            <div className="tl-time">Yesterday</div>
          </div>
        </div>
      </div>
    </main>
  )
}
