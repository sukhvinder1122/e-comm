import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Sample product data
  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 79.99,
        originalPrice: 99.99,
        image: '🎧',
        category: 'Electronics',
        rating: 4.5,
        reviews: 234,
        badge: 'Best Seller',
        description: 'Premium wireless headphones with noise cancellation'
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: 199.99,
        originalPrice: 249.99,
        image: '⌚',
        category: 'Electronics',
        rating: 4.3,
        reviews: 156,
        badge: 'New',
        description: 'Feature-rich smartwatch with health tracking'
      },
      {
        id: 3,
        name: 'Running Shoes',
        price: 89.99,
        originalPrice: 119.99,
        image: '👟',
        category: 'Sports',
        rating: 4.7,
        reviews: 412,
        badge: 'Sale',
        description: 'Professional running shoes for athletes'
      },
      {
        id: 4,
        name: 'Leather Jacket',
        price: 149.99,
        originalPrice: 199.99,
        image: '🧥',
        category: 'Fashion',
        rating: 4.6,
        reviews: 89,
        badge: 'Limited',
        description: 'Genuine leather jacket with modern design'
      },
      {
        id: 5,
        name: 'Coffee Maker',
        price: 59.99,
        originalPrice: 79.99,
        image: '☕',
        category: 'Home',
        rating: 4.4,
        reviews: 321,
        description: 'Automatic coffee maker with timer'
      },
      {
        id: 6,
        name: 'Yoga Mat',
        price: 29.99,
        originalPrice: 39.99,
        image: '🧘',
        category: 'Sports',
        rating: 4.8,
        reviews: 567,
        badge: 'Eco-Friendly',
        description: 'Non-slip yoga mat with carrying strap'
      },
      {
        id: 7,
        name: 'Backpack',
        price: 49.99,
        originalPrice: 69.99,
        image: '🎒',
        category: 'Fashion',
        rating: 4.2,
        reviews: 198,
        description: 'Durable backpack with laptop compartment'
      },
      {
        id: 8,
        name: 'Desk Lamp',
        price: 34.99,
        originalPrice: 44.99,
        image: '💡',
        category: 'Home',
        rating: 4.5,
        reviews: 143,
        description: 'LED desk lamp with adjustable brightness'
      }
    ];

    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
    
    const uniqueCategories = ['all', ...new Set(sampleProducts.map(p => p.category))];
    setCategories(uniqueCategories);
  }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, searchTerm, priceRange]);

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our curated collection of quality products</p>
      </div>

      <div className="products-content">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {categories.map(category => (
                <label key={category} className="category-label">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                className="price-input"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                className="price-input"
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          <div className="products-info">
            <span className="products-count">{filteredProducts.length} Products</span>
            <div className="view-options">
              <button className="view-btn active">Grid</button>
              <button className="view-btn">List</button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your filters or search terms</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setPriceRange({ min: 0, max: 1000 });
                  setSortBy('featured');
                }}
                className="clear-filters-btn"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
