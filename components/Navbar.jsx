import React from "react";
import styles from "../styles/Navbar.module.scss";
import { Layout, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const Navbar = () => {
  return (
    <Header className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Search
            placeholder="Search ..."
            enterButton
            className={styles.input}
          />
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
            <Image
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500j"
              alt=""
              width="30px"
              height="30px"
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
