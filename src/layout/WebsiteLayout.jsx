import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../website/components/Header';
import { Footer } from '../website/components/Footer';
import { HomePage } from '../website/pages/HomePage';
import { ProductsPage } from '../website/pages/ProductsPage';
import { ProductDetailPage } from '../website/pages/ProductDetailPage';
import './../website/WebsiteLayout.css';
export const WebsiteLayout = () => {
  return (
    <div className="website-layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
