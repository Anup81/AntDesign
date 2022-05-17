import React from "react";
import styles from "../styles/Messenger.module.scss";

const Messenger = () => {
  return (
    <div className={styles.messenger}>
      <div className={styles.chatMenu}>
        <div className={styles.chatMenuWrapper}>Menu</div>
      </div>

      <div className={styles.chatBox}>
        <div className={styles.chatBoxWrapper}>Box</div>
      </div>

      <div className={styles.chatOnline}>
        <div className={styles.chatOnlineWrapper}>Online</div>
      </div>
    </div>
  );
};

export default Messenger;
