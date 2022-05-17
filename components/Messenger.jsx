import React from "react";
import styles from "../styles/Messenger.module.scss";
import Conversations from "./Conversations";
import { Input } from "antd";
import Message from "./message/Message";
import ChatOnline from "./chatOnline/ChatOnline";

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
        <div className={styles.chatBoxWrapper}>
          <div className={styles.chatBoxTop}>
            <Message />
            <Message />
            <Message />
          </div>
          <div className={styles.chatBoxButtom}>
            <textarea
              className={styles.chatMessageInput}
              placeholder="write something..."
            ></textarea>
            <button className={styles.chatSubmitButton}>Send</button>
          </div>
        </div>
      </div>

      <div className={styles.chatOnline}>
        <div className={styles.chatOnlineWrapper}>
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
