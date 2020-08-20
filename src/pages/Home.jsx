import React, { PureComponent } from 'react';
import ProductCard from '../components/ProductCard';

import '../styles/components/Home.css';

export class Home extends PureComponent {
  render() {
    return (
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
          photoURL="https://ishopcolombia.vteximg.com.br/arquivos/ids/180099-1000-1000/MWP22AM_A_3.jpg?v=637091799183200000"
        />
        <ProductCard
          productName="productName"
          photoURL="https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/2/723755138414_15.jpg"
        />
      </section>
    );
  }
}

export default Home;
