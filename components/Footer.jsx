import styles from "../styles/Home.module.scss";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterDesign = () => {
  return (
    <div>
      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <Layout className={styles.layout}>
            <Footer className={styles.footer}>Anup Design ©2022</Footer>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default FooterDesign;
