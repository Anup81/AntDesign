import styles from "../styles/Sidebar.module.scss";
import React from "react";
import { Layout, Menu, Dropdown, Button, Space } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
  PictureOutlined,
  AccountBookOutlined,
  ProfileOutlined,
  LogoutOutlined,
  WechatOutlined,
  SoundOutlined,
  CalculatorOutlined,
  CloudOutlined,
  DeploymentUnitOutlined,
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
            <Link href="/main/welcome" style={{ textDecoration: "none" }}>
              <li>
                <HomeOutlined className={styles.icon} />
                <span> Home</span>
              </li>
            </Link>
            <Link href="/main/dashboard" style={{ textDecoration: "none" }}>
              <li>
                <DashboardOutlined className={styles.icon} />
                <span> Dasboard</span>
              </li>
            </Link>
            <Link href="/main/user" style={{ textDecoration: "none" }}>
              <li>
                <TeamOutlined className={styles.icon} />
                <span> Users</span>
              </li>
            </Link>

            <Link href="/main/counter" style={{ textDecoration: "none" }}>
              <li>
                <AccountBookOutlined className={styles.icon} />
                <span> Counter</span>
              </li>
            </Link>

            <Link href="/main/uploadImg" style={{ textDecoration: "none" }}>
              <li>
                <PictureOutlined className={styles.icon} />
                <span> Upload Image</span>
              </li>
            </Link>

            <Link href="/main/messenger" style={{ textDecoration: "none" }}>
              <li>
                <WechatOutlined className={styles.icon} />
                <span>Messenger</span>
              </li>
            </Link>

            <Link href="/" style={{ textDecoration: "none" }}>
              <li>
                <SoundOutlined className={styles.icon} />
                <span>Music Player</span>
              </li>
            </Link>

            <Link href="/" style={{ textDecoration: "none" }}>
              <li>
                <DeploymentUnitOutlined className={styles.icon} />
                <span>Recommendation System</span>
              </li>
            </Link>

            <Link href="/main/calculator" style={{ textDecoration: "none" }}>
              <li>
                <CalculatorOutlined className={styles.icon} />
                <span>Basic Calculator</span>
              </li>
            </Link>

            <Link href="/main/weather" style={{ textDecoration: "none" }}>
              <li>
                <CloudOutlined className={styles.icon} />

                <span>Weather App</span>
              </li>
            </Link>

            <p className={styles.title}>USER</p>
            <li>
              <ProfileOutlined className={styles.icon} />

              <span>Profile</span>
            </li>
            <li>
              <LogoutOutlined className={styles.icon} />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
