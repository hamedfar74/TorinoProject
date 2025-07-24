"use client";
import api from "@/core/configs/api";
import styles from "./DetailBt.module.css";
const DetailBt = ({ data, children }) => {
  const { id } = data;

  const clickHandler = () => {
    const res = api.put(`basket/${id}`).then(res => console.log(res));
    
  };
  return (
    <button className={styles.bt} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default DetailBt;
