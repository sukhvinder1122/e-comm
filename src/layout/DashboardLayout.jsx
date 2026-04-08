import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../adminDashboard/assets/css/dashboardstyle.css"
import { DashboardPage } from '../adminDashboard/pages/dashboard/DashboardPage.jsx';
import { TopicsPage } from '../adminDashboard/pages/products/TopicsPage.jsx';
import { AddProductPage } from '../adminDashboard/pages/products/AddProductPage.jsx';
import { EditProductPage } from '../adminDashboard/pages/products/EditProductPage.jsx';
import { ProductDetailPage } from '../adminDashboard/pages/products/ProductDetailPage.jsx';
import { OrderPage } from '../adminDashboard/pages/orders/OrderPage.jsx';
import { OrdersPage } from '../adminDashboard/pages/orders/OrdersPage.jsx';
import { OrderDetailPage } from '../adminDashboard/pages/orders/OrderDetailPage.jsx';
import { Sidebar } from '../adminDashboard/components/Sidebar';
import ColorChanges from '../adminDashboard/components/ColorChanges';

export const DashboardLayout = () => {
  return (
    <>
      <ColorChanges />
      <div className="shell">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="products" element={<TopicsPage />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="edit-product/:id" element={<EditProductPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="create-order" element={<OrderPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="order/:id" element={<OrderDetailPage />} />
        </Routes>
      </div>
    </>
  );
};
