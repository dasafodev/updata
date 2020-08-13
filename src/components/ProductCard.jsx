import React from 'react';
import '../styles/components/ProductCard.css';

export default function ProductCard({ photoURL }) {
  return (
    <div
      style={{ backgroundImage: `url(${photoURL})` }}
      className="product-card"
    />
  );
}
