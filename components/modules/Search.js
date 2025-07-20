"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input placeholder="مبدا" />
        <input placeholder="مقصد" />
        <DatePicker calendar={persian} locale={persian_fa} />
      </div>
      <button>جستوجو</button>
    </div>
  );
};

export default Search;
