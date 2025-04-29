import { HomeOutlined } from "@ant-design/icons";
import { ConfigProvider, FloatButton, Switch, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";


export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const ToggleTheme = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: darkMode ? '#5A54F9' : '#1677FF',
        }
      }}>
      <div className="layout">
        <header>
          <Switch
            checked={darkMode}
            onChange={ToggleTheme}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            style={{ position: 'absolute', top: 10, right: 10 }}
          />
        </header>
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
    </ConfigProvider>
  );
}