import styles from "../../styles/about/About.module.scss";
import React from "react";
import Image from "next/image";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div className={styles.a}>
      <div className={styles.a_left}>
        <div className={`${styles.a_card} + ${styles.bg}`}></div>
        <div className={styles.a_card}>
          <Image
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500j"
            alt=""
            layout="fill"
            className={styles.a_img}
          />
        </div>
      </div>
      <div className={styles.a_right}>
        <h1 className={styles.a_title}>Profile</h1>
        {/* <p className={styles.a_sub}>
          "I stand on a sweet spot where Design & Code Intersects"
        </p> */}
        <p className={styles.a_desc}>Hello! My name is John Doe.</p>
        <div className={styles.a_award}>
          <div className={styles.a_award_texts}>
            <h4 className={styles.a_award_title}>
              Working on E.K. Solutions Pvt Ltd
            </h4>
            <p className={styles.a_award_desc}>
              Providing a professional approach to the projects with the best
              balance of quality and price.
            </p>
          </div>
        </div>

        <div class={styles.social_links}>
          <a href="#">
            <FacebookOutlined />
          </a>
          <a href="#">
            <TwitterOutlined />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
          <a href="#">
            <LinkOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
