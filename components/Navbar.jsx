import React from "react";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Layout, Input, Menu, Dropdown, Button, Space } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import { SearchOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        label: (
          <a rel="noopener noreferrer" href="/main/profile">
            Profile
          </a>
        ),
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Settings
          </a>
        ),
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Logout
          </a>
        ),
      },
    ]}
  />
);

const Navbar = () => {
  return (
    <Header className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Input placeholder="Search..." className={styles.input} />
          <SearchOutlined className={styles.icon} />
        </div>

        <div className={styles.items}>
          <div className={styles.item}>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              className={styles.item}
            >
              <span>Home</span>
            </Link>
          </div>

          <div className={styles.item}>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              className={styles.item}
            >
              <span>About</span>
            </Link>
          </div>

          <div className={styles.item}>
            <Link
              href="/"
              style={{ textDecoration: "none" }}
              className={styles.item}
            >
              <span>Contact</span>
            </Link>
          </div>

          <div className={styles.item}>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Image
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500j"
                alt=""
                width="30px"
                height="30px"
                className={styles.avatar}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
