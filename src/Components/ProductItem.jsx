import React from 'react';
import { connect } from 'react-redux';
import { approveProduct, markProductMissing } from '../Redux/ProductReducer/action';

const ProductItem = ({ product, approveProduct, markProductMissing }) => (
  <li>
    <span>{product.name}</span>
    <button onClick={() => approveProduct(product.id)}>Approve</button>
    <button onClick={() => markProductMissing(product.id, false)}>
      Mark Missing
    </button>
    <button onClick={() => markProductMissing(product.id, true)}>
      Mark Missing - Urgent
    </button>
  </li>
);

export default connect(null, { approveProduct, markProductMissing })(ProductItem);
