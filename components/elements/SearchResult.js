"use client";
import { useEffect, useRef } from "react";
import TourCard from "./TourCard";
import styles from "./SearchResult.module.css";

const SearchResult = ({ data: { data }, setIsOpen, isOpen }) => {
  const tourRef = useRef(null);

  useEffect(() => {
    const outSideHandler = (e) => {
      console.log(e);
      if (tourRef.current && !tourRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", outSideHandler);
    }

    return () => {
      document.removeEventListener("mousedown", outSideHandler);
    };
  }, [isOpen]);
  return (
    <div ref={tourRef} className={styles.container}>
      <div className={styles.closeBt}>
        <span onClick={() => setIsOpen(false)}>X</span>
      </div>
      <div className={styles.cards}>
        {!data.length && <p className={styles.fail}>محصولی یافت نشد!</p>}
        {data.map((item) => (
          <TourCard key={item.id} tour={item}  />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
