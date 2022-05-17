import React from "react";
import styles from "../styles/Messenger.module.scss";
import Conversations from "./Conversations";
import { Input } from "antd";

const Messenger = () => {
  return (
    <div className={styles.messenger}>
      <div className={styles.chatMenu}>
        <div className={styles.chatMenuWrapper}>
          <Input
            placeholder="Search for friends..."
            className={styles.chatMenuInput}
          />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
        </div>
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
