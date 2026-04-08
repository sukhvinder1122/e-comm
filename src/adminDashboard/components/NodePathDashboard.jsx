import React, { useState } from 'react';
import './NodePathDashboard.css'; // We'll put all your CSS here

const NodePathDashboard = () => {
  const [currentStyle, setCurrentStyle] = useState(1);

  const setStyle = (n) => {
    setCurrentStyle(n);
    document.body.className = `style-${n}`;

    // Show/hide logos
    document.querySelectorAll('[class*="-only"]').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll(`.s${n}-only`).forEach(el => {
      el.style.display = 'flex';
    });

    // Fix progress ring for light themes
    const track = document.querySelector('circle[stroke="#1a2235"]');
    if (track) {
      if (n === 3) track.setAttribute('stroke', '#e2e8f0');
      else if (n === 5) track.setAttribute('stroke', '#ede8ff');
      else track.setAttribute('stroke', '#1a2235');
    }

    // Fix ring percentage color for pastel style
    const ringPct = document.querySelector('.ring-pct');
    if (ringPct) {
      ringPct.style.color = n === 5 ? '#7c3aed' : '#22d98a';
    }
  };

  return (
    <>
      {/* Style Switcher */}
      <div className="switcher">
        <span className="switcher-label">Sidebar style:</span>
        <button 
          className={`style-btn ${currentStyle === 1 ? 'active' : ''}`} 
          onClick={() => setStyle(1)}
        >
          Dark Sleek
        </button>
        <button 
          className={`style-btn ${currentStyle === 2 ? 'active' : ''}`} 
          onClick={() => setStyle(2)}
        >
          Glassmorphism
        </button>
        <button 
          className={`style-btn ${currentStyle === 3 ? 'active' : ''}`} 
          onClick={() => setStyle(3)}
        >
          Light Minimal
        </button>
        <button 
          className={`style-btn ${currentStyle === 4 ? 'active' : ''}`} 
          onClick={() => setStyle(4)}
        >
          Brutalist
        </button>
        <button 
          className={`style-btn ${currentStyle === 5 ? 'active' : ''}`} 
          onClick={() => setStyle(5)}
        >
          Soft Pastel
        </button>
      </div>

      <div className="shell">
        {/* Sidebar */}
        <aside className="sidebar" id="sidebar">
          {/* Logos for each style */}
          <div className="logo s1-only">
            <div className="logo-dot"></div>NodePath
          </div>
          <div className="logo s2-only" style={{ display: 'none' }}>
            <div className="logo-badge">N</div> NodePath
          </div>
          <div className="logo s3-only" style={{ display: 'none' }}>
            <div className="logo-icon">N</div> NodePath
          </div>
          <div className="logo s4-only" style={{ display: 'none' }}>
            <div className="logo-box">N</div> NODEPATH
          </div>
          <div className="logo s5-only" style={{ display: 'none' }}>
            <div className="logo-emoji">🌿</div> NodePath
          </div>

          <div className="nav-label">Main Menu</div>
          <div className="nav-item active"><span className="nav-icon">▣</span> Dashboard</div>
          <div className="nav-item"><span className="nav-icon">▷</span> Topics</div>
          <div className="nav-item"><span className="nav-icon">✦</span> Projects</div>
          <div className="nav-item"><span className="nav-icon">◈</span> Resources</div>

          <div className="nav-label" style={{ marginTop: '14px' }}>Account</div>
          <div className="nav-item"><span className="nav-icon">◉</span> Progress</div>
          <div className="nav-item"><span className="nav-icon">⚙</span> Settings</div>

          <div className="sidebar-bottom">
            <div className="avatar">
              <div className="avatar-img">A</div>
              <div>
                <div className="avatar-name">Arjun</div>
                <div className="avatar-role">Beginner · Week 2</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main">
          <div className="topbar">
            <div>
              <div className="page-title">Learning Dashboard</div>
              <div className="page-sub">Node.js Beginner Path · April 2026</div>
            </div>
            <div className="topbar-right">
              <div className="badge">● On Track</div>
              <button className="btn">Continue →</button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card g">
              <div className="stat-label">Topics Done</div>
              <div className="stat-val g">8</div>
              <div className="stat-change">of 24 · <span>+2 this week</span></div>
            </div>
            <div className="stat-card b">
              <div className="stat-label">Hours Spent</div>
              <div className="stat-val b">14.5</div>
              <div className="stat-change">avg <span>2.1h/day</span></div>
            </div>
            <div className="stat-card a">
              <div className="stat-label">Day Streak</div>
              <div className="stat-val a">7</div>
              <div className="stat-change">personal best · <span>keep it!</span></div>
            </div>
            <div className="stat-card p">
              <div className="stat-label">Projects Built</div>
              <div className="stat-val p">2</div>
              <div className="stat-change">next: <span>REST API</span></div>
            </div>
          </div>

          {/* Mid Row */}
          <div className="mid-row">
            <div className="card">
              <div className="card-title">Study hours this week <span className="see-all">View all →</span></div>
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
              <div className="card-title">Topic progress <span className="see-all">All →</span></div>
              <div className="topic-row">
                <div className="topic-num" style={{background:'rgba(34,217,138,.15)', color:'#22d98a'}}>1</div>
                <div className="topic-info">
                  <div className="topic-name">JavaScript basics</div>
                  <div className="topic-sub">Variables, functions, loops</div>
                </div>
                <div className="topic-bar-wrap">
                  <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'100%', background:'#22d98a'}}></div></div>
                  <div className="topic-pct">100%</div>
                </div>
              </div>
              <div className="topic-row">
                <div className="topic-num" style={{background:'rgba(34,217,138,.15)', color:'#22d98a'}}>2</div>
                <div className="topic-info">
                  <div className="topic-name">Async / Await</div>
                  <div className="topic-sub">Promises, callbacks</div>
                </div>
                <div className="topic-bar-wrap">
                  <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'80%', background:'#22d98a'}}></div></div>
                  <div className="topic-pct">80%</div>
                </div>
              </div>
              <div className="topic-row">
                <div className="topic-num" style={{background:'rgba(79,156,249,.15)', color:'#4f9cf9'}}>3</div>
                <div className="topic-info">
                  <div className="topic-name">Node.js core</div>
                  <div className="topic-sub">fs, path, http</div>
                </div>
                <div className="topic-bar-wrap">
                  <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'45%', background:'#4f9cf9'}}></div></div>
                  <div className="topic-pct">45%</div>
                </div>
              </div>
              <div className="topic-row">
                <div className="topic-num" style={{background:'rgba(249,168,37,.1)', color:'#f9a825'}}>4</div>
                <div className="topic-info">
                  <div className="topic-name">Express.js</div>
                  <div className="topic-sub">Routes, middleware</div>
                </div>
                <div className="topic-bar-wrap">
                  <div className="topic-bar-bg"><div className="topic-bar-fill" style={{width:'10%', background:'#f9a825'}}></div></div>
                  <div className="topic-pct">10%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="bottom-row">
            <div className="card">
              <div className="card-title">Recent activity <span className="see-all">History →</span></div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#22d98a'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Completed — Async/Await deep dive</div>
                  <div className="tl-sub">All 6 exercises done · 100% score</div>
                </div>
                <div className="tl-time">2h ago</div>
              </div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#4f9cf9'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Started — Node.js built-in modules</div>
                  <div className="tl-sub">fs, path — 3 of 7 done</div>
                </div>
                <div className="tl-time">Yesterday</div>
              </div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#a78bfa'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Project — "Hello World" server</div>
                  <div className="tl-sub">First Node.js server running locally!</div>
                </div>
                <div className="tl-time">2 days ago</div>
              </div>
              <div className="timeline-item">
                <div className="tl-dot" style={{background:'#f9a825'}}></div>
                <div className="tl-body">
                  <div className="tl-title">Quiz — JavaScript fundamentals</div>
                  <div className="tl-sub">Score: 9/10 · Great work!</div>
                </div>
                <div className="tl-time">3 days ago</div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="card progress-card">
              <div className="card-title" style={{width:'100%'}}>Overall progress</div>
              <div className="ring-container">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1a2235" strokeWidth="9"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#22d98a" strokeWidth="9"
                    strokeDasharray="251.2" strokeDashoffset="168.3" strokeLinecap="round"/>
                </svg>
                <div className="ring-center">
                  <div className="ring-pct">33%</div>
                  <div className="ring-sub">8/24</div>
                </div>
              </div>
              <div className="skills-label">Skill tags</div>
              <div className="pill-grid">
                <div className="pill done">JS basics</div>
                <div className="pill done">ES6+</div>
                <div className="pill active">Async</div>
                <div className="pill active">Node core</div>
                <div className="pill next">Express</div>
                <div className="pill next">npm</div>
                <div className="pill locked">MongoDB</div>
                <div className="pill locked">REST API</div>
              </div>
              <div className="pill-legend">
                <div><span className="pill-dot" style={{background:'#22d98a'}}></span>Done</div>
                <div><span className="pill-dot" style={{background:'#4f9cf9'}}></span>Active</div>
                <div><span className="pill-dot" style={{background:'#f9a825'}}></span>Next</div>
                <div><span className="pill-dot" style={{background:'#5a6a80'}}></span>Locked</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NodePathDashboard;