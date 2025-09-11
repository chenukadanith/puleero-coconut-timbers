import React, { useState, useEffect } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  // Mock product images for gallery
  const productImages = product ? [
    product.image,
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop&crop=center"
  ] : [];

  // Mock color options
  const colorOptions = [
    { name: "Natural", color: "#8B4513" },
    { name: "Dark Oak", color: "#654321" },
    { name: "Light Brown", color: "#D2691E" },
    { name: "Mahogany", color: "#800000" }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  if (!isOpen || !product) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
    <div className="modal-container">
      <button className="modal-close" onClick={onClose}>
        <span>×</span>
      </button>
  
      <div className="modal-content">
        {/* Left - Product Images */}
        <div className="modal-image-section">
          <div className="main-image-container">
            <img 
              src={productImages[selectedImage] || ''} 
              alt={product?.name || 'Product'}
              className="main-image"
            />
          </div>
  
          <div className="image-thumbnails">
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product?.name || 'Product'} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
  
        {/* Right - Details */}
        <div className="modal-details-section">
          <h1 className="product-title">{product?.name || 'Product Name'}</h1>
          <p className="product-code">#{product?.id?.toString().padStart(5, '0') || '00000'}</p>
  
          <div className="price-section">
            <span className="price-currency">$</span>
            <span className="price-amount">
              {product?.price?.replace(/[^\d.]/g, '') || '0'}
            </span>
          </div>
  
          {/* Colors */}
          <div className="color-selection">
            <h3>Select Color</h3>
            <div className="color-options">
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  className={`color-option ${selectedColor === index ? 'selected' : ''}`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => setSelectedColor(index)}
                  title={color.name}
                />
              ))}
            </div>
          </div>
  
          {/* Benefits */}
          <div className="benefits-section">
            <h3>Benefits</h3>
            <ul className="benefits-list">
              {product?.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) || []}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProductModal;
