import { Button, Typography } from "antd"
import { Link } from "react-router"

export default function Home() {
  return (
    <div>
      <Typography.Title level={1}>Home Page</Typography.Title>
      <Link to={'/userForm'}>
        <Button>Create User</Button>
      </Link>
      <Link to={'/usersTable'}>
        <Button>Table of Users</Button>
      </Link>
      {/* <button onClick={() => setShowModal(true)}>
        Create User
      </button>
      {showModal && createPortal(
        <div className="modal">
          <UserForm onClose={() => setShowModal(false)} />
        </div>,
        document.body
      )} */}
    </div>
  )
}