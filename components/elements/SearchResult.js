import TourCard from "./TourCard"
import styles from "./SearchResult.module.css"
const SearchResult = ({data:{data}}) => {
    console.log(data)
  return (
    <div className={styles.container}>
        {data.map(item => <TourCard tour={item} />)}
    </div>
  )
}

export default SearchResult