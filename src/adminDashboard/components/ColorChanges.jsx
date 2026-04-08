import React, { useState, useEffect } from 'react';
export default function ColorChanges() {

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

      useEffect(() => {
        setStyle(1);
      }, []);
  return (
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
  )
}
