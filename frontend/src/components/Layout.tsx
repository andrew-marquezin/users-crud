import { HomeOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="layout">
      <main>
        <Link to={'/'}>
          <FloatButton
            shape="square"
            type="primary"
            icon={<HomeOutlined />}
          />
        </Link>
        <Outlet />
      </main>
    </div>
  )
}