import styles from "../styles/Home.module.scss";

import HeadMets from "../components/HeadMets";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BreadcrumbSingle from "../components/BreadcrumbSingle";
import Dashboard from "../components/Dashboard";

import HomeSection from "../components/home/Home";
import { Layout } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <div className={styles.home}>
      <HeadMets />
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
        <BreadcrumbSingle />
        <Content className={styles.counter}>
          <HomeSection />
        </Content>
      </div>
    </div>
  );
}
