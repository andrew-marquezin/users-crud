import { Link } from "react-router"

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={'/userForm'}>
        <button>Create User</button>
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