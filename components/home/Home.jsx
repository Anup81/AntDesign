import styles from "../../styles/home/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      {/* <video src={videoBg} autoPlay loop muted /> */}
      <div className={styles.content}>
        <h1 className={styles.h}>Welcome To The AntDesign Home Page.</h1>
        {/* <p>To the Ant Design.</p> */}
      </div>
    </div>
  );
};

export default Home;
