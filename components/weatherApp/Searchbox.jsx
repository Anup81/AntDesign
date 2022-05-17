import React from "react";
import cities from "../lib/city.list.json";
import Link from "next/link";
import Router from "next/router";

const Searchbox = ({ placeholder }) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return <div>Searchbox</div>;
};

export default Searchbox;
