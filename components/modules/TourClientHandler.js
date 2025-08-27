"use client";

import { useEffect, useState } from "react";
import styles from "./TourClientHandler.module.css";
import Image from "next/image";
const TourClientHandler = ({ children }) => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    setShowAll(false)
    // if(window.inn)
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [isMobile]);
  
//   const clickHandler = () =>{
//     setShowAll((showAll) => !showAll)
//   }
  if (isMobile && !showAll) {
    return (
      <>
        {children?.slice(0, 3)}

        <div className={styles.container} onClick={() => setShowAll(true)}>
          <p>
            مشاهده بیشتر
            <Image width={12} height={12} src="/icons/little-arrow-down.svg" alt="arrow down" />
          </p>
        </div>
      </>
    );
  }
  return (
    <div className={styles.tourContainer}>
      {children}
      {/* {isMobile && !showAll && (
        
      )} */}
    </div>
  );
};

export default TourClientHandler;
