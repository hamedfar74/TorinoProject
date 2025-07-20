import TourCard from "../elements/TourCard";
import TourClientHandler from "./TourClientHandler";

export default async function Tours() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <h3>همه تور ها</h3>
      <TourClientHandler>
        {data.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </TourClientHandler>
    </div>
  );
}
