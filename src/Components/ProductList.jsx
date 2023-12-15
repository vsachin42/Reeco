import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  <div>
    <h2>Product List</h2>
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductList);
