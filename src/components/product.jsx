import React from 'react';
import '../styles/components/Product.css';

export default function Product({ productURL, nameProduct, priceProduct, ratingProduct }) {
  return (
    <div className="product">
            <figure className="product-image">
                <img src={productURL} alt="" />
            </figure>
            <span className="product-overlay">
                <p>
                    <span className="product-name">{nameProduct}</span>
                    <span className="product-comments">{priceProduct}</span>
                    <span className="product-comments">{ratingProduct}</span>
                    <button>
                      Ver Mas
                    </button>
                </p>
            </span>
    </div>
  );
}