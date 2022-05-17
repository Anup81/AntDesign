import { Breadcrumb } from "antd";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const BreadcrumbComp = () => {
  const router = useRouter();
  const value = router.asPath.toLowerCase().split("/");

  const path = value.map(
    (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
  );

  return (
    <div>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          <Link href="/home">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{path[1] + " / " + path[2]}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComp;
