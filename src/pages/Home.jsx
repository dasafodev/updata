import React, { PureComponent } from 'react';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Header from '../components/header';

import '../styles/components/Home.css';
import '../styles/components/App.styl';

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <section className="products-container">
          <ProductCard
            productName="productName"
            photoURL="https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/ipadair-silver-wifi_1.jpg"
          />
          <ProductCard
            productName="productName"
            photoURL="https://falabella.scene7.com/is/image/FalabellaCO/4126654_1?wid=800&hei=800&qlt=70"
          />
          <ProductCard
            productName="productName"
            photoURL="https://exitocol.vtexassets.com/arquivos/ids/548642/smartwatch-reloj-inteligente-sumergible-control-musica-rosa.jpg?v=637012391578770000"
          />
          <ProductCard
            productName="productName"
            photoURL="https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/soundlink_around_ear_wireless_ii_hr14_1.jpg"
          />
          <ProductCard
            productName="productName"
            photoURL="https://falabella.scene7.com/is/image/FalabellaCO/4126654_1?wid=800&hei=800&qlt=70"
          />
        </section>
      </div>
    );
  }
}

export default Home;
