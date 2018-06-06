import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({dispatch, products}) => {
  function handleDelete(id){
    // console.log(id);
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleQuery(id){
    // console.log(id);
    dispatch({
      type: 'products/query',
      payload: id
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} onQuery={handleQuery} products={products} />
    </div>
  )
};

export default connect(({ products }) => ({
  products,
}))(Products);