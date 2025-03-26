import { Space, Table, TableProps, Typography } from "antd";

interface DataType {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  documentNumber: string;
  email: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, {
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
        <Typography.Link>Edit</Typography.Link>
        <Typography.Link>Delete</Typography.Link>
      </Space>
    )
  }
]

const data: DataType[] = [
  {
    id: '001',
    firstName: 'Phillip',
    lastName: 'Smith',
    dateOfBirth: '01/01/1990',
    documentNumber: '12345678909',
    email: 'email@example.com',
  }, {
    id: '002',
    firstName: 'Phillip',
    lastName: '2',
    dateOfBirth: '01/01/1990',
    documentNumber: '50302006818',
    email: 'outro_email@example.com',
  },
]

export default function UsersTable() {
  return (
    <>
      <Typography.Title level={2}>Users Table</Typography.Title>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        bordered={true}
        pagination={false}
        scroll={{ x: 'max-content', y: 400 }}
      />
    </>
  )
}