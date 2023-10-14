import React from 'react';
import { Avatar, Table } from 'antd';



const columns = [
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Invoice',
    dataIndex: 'invoice',
    key: 'invoice',
  },
  {
    title: 'People',
    dataIndex: 'people',
    key: 'people',
  },
];

const CustomTable = ({ statusFilter, dataSource }) => {
    const filteredDataSource = statusFilter
    ? dataSource.filter((item) => item.status === statusFilter)
    : dataSource;
  return (
    <Table dataSource={filteredDataSource} columns={columns} pagination={false} />
  );
};

export default CustomTable;
