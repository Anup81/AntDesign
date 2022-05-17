import React from "react";
import styles from "../../styles/Home.module.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Layout } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
import Messenger from "../../components/Messenger";
const { Content } = Layout;

const welcome = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <Breadcrumb />
        <Content className={styles.counter}>
          <Messenger />
        </Content>
      </div>
    </div>
  );
};

export default welcome;
