import { Button, Typography } from "antd"
import { Link } from "react-router"

export default function Home() {
  return (
    <div id="home-container">
      <Typography.Title level={1}>Home Page</Typography.Title>
      <div>
        <Link to={'/userForm'}>
          <Button className="home-button">Create User</Button>
        </Link>
        <Link to={'/usersTable'}>
          <Button className="home-button">Table of Users</Button>
        </Link>
      </div>
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