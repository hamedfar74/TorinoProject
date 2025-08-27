import TourCard from "../elements/TourCard";
import TourClientHandler from "./TourClientHandler";
import styles from "./Tours.module.css";

export default async function Tours() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className={styles.container}>
      <h2>همه تور ها</h2>
      <div >
        <TourClientHandler>
          {data.map((tour) => (
            <TourCard  key={tour.id} tour={tour} />
          ))}
        </TourClientHandler>
      </div>
    </div>
  );
}
