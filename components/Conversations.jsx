import Image from "next/image";
import React from "react";
import styles from "../styles/Conversations.module.scss";

const Conversations = () => {
  return (
    <div className={styles.conversation}>
      <Image
        src="https://images.pexels.com/photos/7015865/pexels-photo-7015865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        className={styles.conversationImg}
        width="30px"
        height="30px"
        alt=""
      />
      <span className={styles.conversationName}>Name</span>
    </div>
  );
};

export default Conversations;
