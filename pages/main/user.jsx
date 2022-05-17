import React from "react";
import User from "../../components/User";
import styles from "../../styles/Home.module.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import { Layout } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
const { Content } = Layout;

const todoPage = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <Breadcrumb />
        <Content className={styles.todo}>
          <User />
        </Content>
      </div>
    </div>
  );
};

export default todoPage;
