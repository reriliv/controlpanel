import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, onQuery, products }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <div>
          <Popconfirm title='Delete?' onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
          <Popconfirm title='Click?' onConfirm={() => onQuery()}>
            <Button>Query</Button>
          </Popconfirm>
        </div>
      );
    },
  }];

  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey='id'
    />
  );

};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onQuery: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;