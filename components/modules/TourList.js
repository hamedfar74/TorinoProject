import { Suspense } from "react";
import Tours from "./Tours";
import TourSkeleton from "../elements/TourSkeleton";

const TourList = () => {
  return (
    <Suspense
      fallback={
        <div>
          {[...Array(4)].map((_, i) => (
            <TourSkeleton key={i} />
          ))}
        </div>
      }
    >
      <Tours />
    </Suspense>
  );
};

export default TourList;
