"use client";

import DatePicker from "react-multi-date-picker";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input placeholder="مبدا" />
        <input placeholder="مقصد" />
        <DatePicker />
      </div>
      <button>جستوجو</button>
    </div>
  );
};

export default Search;
