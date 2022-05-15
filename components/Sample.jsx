// import styles from "../styles/Sidebar.module.scss";
import styles from "../styles/Sidebar.module.scss";
import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />

          <Link href="/">
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/users">
          <TeamOutlined />

          <Link href="/users">
            <span>Users</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/counter">
          <DashboardOutlined />

          <Link href="/counter">
            <span>Counter</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
