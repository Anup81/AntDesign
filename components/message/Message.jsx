import React from "react";
import styles from "../../styles/message/Message.module.scss";
import Image from "next/image";
import cn from "classnames";

const Message = () => {
  return (
    <div className={styles.message}>
      <div className={styles.messageTop}>
        {/* <Image
          src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600"
          className={styles.messageImg}
          width="32px"
          height="32px"
          alt=""
        /> */}
        <p className={styles.messageText}>
          Ant Design React is dedicated to providing a good development
          experience for programmers.
        </p>
      </div>

      <div className={styles.messageBottom}>1 hour ago</div>
    </div>
  );
};

export default Message;
