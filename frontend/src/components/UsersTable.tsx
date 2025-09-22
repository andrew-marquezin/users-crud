import {
  Button,
  Space,
  Table,
  Typography,
  Col,
  Skeleton,
  Popconfirm,
} from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import api from "../utils/api";
import { UserType } from "../types/UserType";


export default function UsersTable() {

  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api.get('/').then(response => {
      if (response.status === 200) {
        if (Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Expected array, got: ', response.data.data);
          setUsers([]);
        }
      }
      setLoading(false);
    });
  }, []);

  const handleDelete = (id: string) => {
    api.delete(`/${id}`).then(response => {
      if (response.status === 204) {
        setUsers(users.filter(user => user._id !== id));
      } else {
        console.error('Failed to delete user: ', response.data.message)
      }
    }).catch((e) => {
      console.error('Error deleting user: ', e);
    })
  }

  return (
    <div>
      {loading && <Skeleton active />}
      <Typography.Title level={2}>Users Table</Typography.Title>
      <Table<UserType>
        rowKey="_id"
        columns={[
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
            render: (dateOfBirth: Date) => dayjs(dateOfBirth).format('DD/MM/YYYY')
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
            render: (_unused: unknown, record: UserType) => (
              <Space>
                <Col className="action-buttons">
                  <Button variant="outlined" color="primary">Edit</Button>
                  <Popconfirm
                    title="Delete User"
                    description="Are you sure to delete this user?"
                    placement="bottomRight"
                    onConfirm={() => handleDelete(record._id)}
                  >
                    <Button variant="filled" color="danger">Delete</Button>
                  </Popconfirm>
                </Col>
              </Space>
            )
          }
        ]}
        dataSource={users}
        bordered={true}
        pagination={false}
        scroll={{ x: 'max-content', y: 400 }}
      />
    </div>
  )
}