import React from "react";
import styles from "../../styles/Chatonline/Chatonline.module.scss";
import Image from "next/image";

const ChatOnline = () => {
  return (
    <div className={styles.chatOnline}>
      <div className={styles.chatOnlineFriend}>
        <div className={styles.chatOnlineImgContainer}>
          <Image
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500j"
            alt=""
            width="30px"
            height="30px"
            className={styles.chatOnlineImg}
          />
          <div className={styles.chatOnlineBadge}></div>
        </div>
        <span className={styles.chatOnlineName}>John Doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
