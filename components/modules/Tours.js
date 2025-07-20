import { Suspense } from "react";
import TourCard from "../elements/TourCard";
import TourSkeleton from "../elements/TourSkeleton";

export default async function Tours() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <h3>همه تور ها</h3>
      {/* <Suspense
        fallback={
          <div>
            {[...Array(4)].map((_, index) => (
              <TourSkeleton key={index} />
            ))}
          </div>
        }
      > */}
        {/* <TourSkeleton /> */}
        {data.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      {/* </Suspense> */}
    </div>
  );
}
