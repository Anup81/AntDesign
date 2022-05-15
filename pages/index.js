import styles from "../styles/Home.module.scss";

import HeadMets from "../components/HeadMets";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeadMets />
      <Sidebar />
      <div className={styles.homeContainer}>
        <Navbar />
      </div>
    </div>
  );
}
