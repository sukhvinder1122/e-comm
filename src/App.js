import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { WebsiteLayout } from './layout/WebsiteLayout.jsx';
import { DashboardLayout } from './layout/DashboardLayout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<WebsiteLayout />} />
        <Route path="/admin/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;