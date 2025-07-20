import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./TourSkeleton.module.css"
const TourSkeleton = () => {
  return (
    <div className={styles.tourCard} >
      <Skeleton height={170} borderRadius={"10px 10px 0 0"} /> 
      <Skeleton height={30} width={"60%"} /> 
      <Skeleton height={20} width={"80%"}  />
      <div className={styles.divider}></div>
      <div>
        <Skeleton height={22} width={120} />
        <Skeleton height={33} width={90} /> 
      </div>
    </div>
  );
};

export default TourSkeleton;
