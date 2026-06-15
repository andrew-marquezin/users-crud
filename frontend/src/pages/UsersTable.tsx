import {
  Button,
  Space,
  Table,
  Typography,
  Col,
  Skeleton,
  Popconfirm,
  Form, notification,
} from "antd";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {UserInputDTO, UserType} from "../types/UserType";
import UserModal from "../components/UserModal";
import PhoneForm from "../components/PhoneForm";
import AddressForm from "../components/AddressForm";
import back from "../utils/api";


export default function UsersTable() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const [api, contextHolder] = notification.useNotification();


  const columns = [
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
    }
  ];

  const expandedRowRender = (record: UserType) => {
    return (
      <Form
        initialValues={{addresses: record.addresses, phoneNumbers: record.phoneNumbers}}
        onFinish={(values) => {
          back.put(`/${record._id}`, values).then(response => {
            if (response.status === 200) {
              setUsers(users.map((user) =>
                user._id === record._id ? response.data.data : user
              ));
              api.success({
                message: 'Data saved successfully!',
                placement: 'bottomLeft',
              })
            }
          }).catch((e) => {
            // remover depois
            console.error('Error updating user: ', e);
            api.error({
              message: 'Error while saving data!',
              placement: 'bottomLeft',
            })
          })
        }}
      >
        <Typography.Title level={5}>Phone Numbers</Typography.Title>
        <PhoneForm/>
        <Typography.Title level={5}>Addresses</Typography.Title>
        <AddressForm/>
        <Button type="primary" htmlType="submit">Save</Button>
      </Form>
    )
  }

  useEffect(() => {
    setLoading(true);
    back.get('/').then(response => {
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

  const handleAddUser = () => {
    setEditingUser(null);
    setOpen(true);
  };

  const handleEditUser = (record: UserType) => {
    setEditingUser(record);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  }

  const handleFinish = (values: UserInputDTO) => {
    values = {...values, documentNumber: values.documentNumber.replace(/\D/g, '')};
    if (editingUser) {
      back.put(`/${editingUser._id}`, values).then(response => {
        if (response.status === 200) {
          setUsers(users.map((user) =>
            user._id === editingUser._id ? response.data.data : user
          ));
        }
      }).catch((e) => {
        console.error('Error updating user: ', e);
      })
    } else {
      back.post('/', values).then(response => {
        if (response.status === 201) {
          setUsers([...users, response.data.data]);
        } else {
          console.error('Failed to create user: ', response.data.message);
        }
      }).catch(e => {
        console.error('Error creating user: ', e);
      })
    }
    setOpen(false);
  }

  const handleDelete = (id: string) => {
    back.delete(`/${id}`).then(response => {
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
    <>
      {loading ? <Skeleton active/>
        : <div>
          {contextHolder}
          <Typography.Title level={2}>Users Table</Typography.Title>
          <Table<UserType>
            rowKey={record => record._id}
            columns={[...columns,
              {
                title: 'Actions',
                key: 'actions',
                fixed: 'right',
                render: (_unused: unknown, record: UserType) => (
                  <Space>
                    <Col className="action-buttons">
                      <Button variant="outlined" color="primary"
                              onClick={() => handleEditUser(record)}>Edit</Button>
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
            dataSource={loading ? [] : users}
            bordered
            expandable={{expandedRowRender}}
            pagination={false}
            scroll={{x: 'max-content', y: 400}}
          />
          <Button type="primary" style={{marginTop: 16}} onClick={handleAddUser}>
            Add User
          </Button>
          <UserModal
            visible={open}
            onFinish={handleFinish}
            onCancel={handleCancel}
            initialData={editingUser}
          />
        </div>
      }
    </>
  )
}