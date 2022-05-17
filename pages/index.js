import styles from "../styles/Home.module.scss";

import HeadMets from "../components/HeadMets";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Dashboard from "../components/Dashboard";
import { Layout } from "antd";
const { Content } = Layout;

export default function Home() {
  return (
    <div className={styles.home}>
      <HeadMets />
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <Breadcrumb />
        <Content className={styles.counter}></Content>
      </div>
    </div>
  );
}
