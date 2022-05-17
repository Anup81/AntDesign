import React, { useEffect, useState } from "react";

import { Table } from "antd";

import styles from "../styles/User.module.scss";

const getColumnSettings = () => [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Website",
    dataIndex: "website",
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>Users</div>
      <Table
        dataSource={users}
        columns={getColumnSettings()}
        className={styles.datagrid}
      />
    </div>
  );
};

export default Users;
