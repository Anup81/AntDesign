import styles from "../styles/Sidebar.module.scss";
import React from "react";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <Sider className={styles.sidebar}>
        <div className={styles.top}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span className={styles.logo}>AntDesign</span>
          </Link>
        </div>
        <hr />

        <div className={styles.center}>
          <ul>
            <p className={styles.title}>LIST</p>
            <Link href="/" style={{ textDecoration: "none" }}>
              <li>
                <HomeOutlined className={styles.icon} />
                <span> Home</span>
              </li>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardOutlined className={styles.icon} />
                <span> Dasboard</span>
              </li>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <li>
                <TeamOutlined className={styles.icon} />
                <span> Users</span>
              </li>
            </Link>
          </ul>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
