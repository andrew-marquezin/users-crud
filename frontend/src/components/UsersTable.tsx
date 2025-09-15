import { Button, Space, Table, TableProps, Typography, Col, Skeleton } from "antd";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { UserType } from "../types/UserType";

// interface DataType {
//   id: string;
//   firstName: string;
//   lastName: string;
//   dateOfBirth: string;
//   documentNumber: string;
//   email: string;
// }

const columns: TableProps<UserType>['columns'] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   key: 'id',
  // }, 
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  }, {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  }, {
    title: 'Date of Birth',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
  }, {
    title: 'Document Number',
    dataIndex: 'documentNumber',
    key: 'documentNumber',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Actions',
    key: 'actions',
    fixed: 'right',
    render: () => (
      <Space>
        <Col className="action-buttons">
          <Button variant="outlined" color="primary">Edit</Button>
          <Button variant="filled" color="danger">Delete</Button>
        </Col>
      </Space>
    )
  }
]

const data: UserType[] = [
  {
    id: '001',
    firstName: 'Phillip',
    lastName: 'Smith',
    dateOfBirth: new Date(1990, 0, 1),
    documentNumber: '12345678909',
    email: 'email@example.com',
    addresses: [],
    phoneNumbers: [],
  }, {
    id: '002',
    firstName: 'Phillip',
    lastName: '2',
    dateOfBirth: new Date(1990, 0, 1),
    documentNumber: '50302006818',
    email: 'outro_email@example.com',
    addresses: [],
    phoneNumbers: [],
  },
]

export default function UsersTable() {

  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log('UsersTable mounted');
    setLoading(true);
    api.get('/').then(response => {
      if (response.status === 200) {
        if (Array.isArray(response.data.data)) {
          setUsers(response.data.data);
          console.log(response.data.data);
        } else {
          console.error('Expected array, got: ', response.data.data);
          setUsers([]);
        }
      }
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <Skeleton active />}
      <Typography.Title level={2}>Users Table</Typography.Title>
      <Table<UserType>
        rowKey="_id"
        columns={columns}
        dataSource={users}
        bordered={true}
        pagination={false}
        scroll={{ x: 'max-content', y: 400 }}
      />
    </div>
  )
}