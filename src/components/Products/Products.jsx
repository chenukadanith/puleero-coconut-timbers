import React, { useState } from "react";
import "./Products.css";
import ProductModal from "./ProductModal";
import WhatsAppButton from '../WhatsAppButton';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏠' },
    { id: 'furniture', name: 'Furniture', icon: '🪑' },
    { id: 'flooring', name: 'Flooring', icon: '🏠' },
    { id: 'decorative', name: 'Decorative', icon: '🎨' },
    { id: 'construction', name: 'Construction', icon: '🔨' }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Coconut Timber Chairs",
      category: "furniture",
      description: "Handcrafted dining chairs with natural coconut timber finish, featuring ergonomic design and superior comfort",
      price: "From $89",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
      features: ["Termite Resistant", "Natural Finish", "Ergonomic Design", "Handcrafted"]
    },
    {
      id: 2,
      name: "Elegant Coconut Timber Tables",
      category: "furniture",
      description: "Sturdy dining and coffee tables made from premium coconut timber with unique grain patterns",
      price: "From $299",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
      features: ["Durable Construction", "Unique Grain Pattern", "Easy Maintenance", "Custom Sizes"]
    },
    {
      id: 3,
      name: "Natural Coconut Timber Flooring",
      category: "flooring",
      description: "Beautiful flooring tiles with natural coconut timber texture, perfect for modern and traditional spaces",
      price: "From $45/sq ft",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
      features: ["Moisture Resistant", "Easy Installation", "Natural Beauty", "Eco-Friendly"]
    },
    {
      id: 4,
      name: "Premium Coconut Timber Skirting",
      category: "construction",
      description: "High-quality skirting boards for elegant interior finishing with precision-cut edges",
      price: "From $25/linear ft",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
      features: ["Precision Cut", "Smooth Finish", "Long Lasting", "Multiple Profiles"]
    },
    {
      id: 5,
      name: "Decorative Coconut Wall Panels",
      category: "decorative",
      description: "Stunning decorative wall panels to enhance your interior design with natural texture",
      price: "From $75/sq ft",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
      features: ["Design Flexibility", "Natural Texture", "Easy Installation", "Custom Patterns"]
    },
    {
      id: 6,
      name: "Structural Coconut Timber Beams",
      category: "construction",
      description: "Heavy-duty structural beams for traditional and modern construction projects",
      price: "From $120/linear ft",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
      features: ["High Strength", "Weather Resistant", "Sustainable", "Load Bearing"]
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-header">
          <h2 className="fade-in-up">Our Premium Products</h2>
          <p className="fade-in-up">
            Discover our extensive range of coconut timber products, each crafted with precision 
            and care to bring natural beauty and durability to your space.
          </p>
        </div>

        <div className="product-categories fade-in-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card fade-in-up"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-badge">Premium Quality</div>
                <div className="product-overlay">
                  <button className="btn btn-primary">Quick View</button>
                </div>
              </div>
              
              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-features">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button 
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta fade-in-up">
          <h3>Need a Custom Solution?</h3>
          <p>We specialize in custom coconut timber products tailored to your specific requirements.</p>
          <button className="btn">Get Custom Quote</button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <WhatsAppButton />
    </section>
  );
};

export default Products;
