"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from "./Search.module.css";
import { useState } from "react";
import { toursRoutes } from "@/utils/instants";
import { convertCity } from "@/utils/helper";
import { useGetSearchTours } from "@/core/services/queries";
import SearchResult from "../elements/SearchResult";

const Search = () => {
  const [query, setQuery] = useState({
    originId: "",
    destinationId: "",
    startDate: "",
    endDate: "",
  });
  const { data, isPending,isLoading , refetch } = useGetSearchTours(query);
  console.log(data);
  const dateHandler = (value) => {
    if (Array.isArray(value) && value.length === 2) {
      const [startDate, endDate] = value;
      const isoStart = startDate.toDate().toISOString();
      const isoEnd = endDate.toDate().toISOString();
      // console.log("ISO Start:", isoStart);
      // console.log("ISO End:", isoEnd);
      setQuery((query) => ({ ...query, startDate: isoStart, endDate: isoEnd }));
    } else {
      console.error("Invalid date range:", value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    refetch();
    console.log(query);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setQuery((query) => ({ ...query, [name]: value }));
  };
  return (
    <>
    
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.box}>
        <select name="originId" onChange={changeHandler}>
          <option value="">مبدا</option>
          {toursRoutes.map((route) => (
            <option key={route.id} value={route.id}>
              {convertCity(route.name)}
            </option>
          ))}
        </select>
        <select name="destinationId" onChange={changeHandler}>
          <option value="">مقصد</option>
          {toursRoutes.map((route) => (
            <option key={route.id} value={route.id}>
              {convertCity(route.name)}
            </option>
          ))}
        </select>
        {/* <input className={styles.origin} placeholder="مبدا" /> */}
        {/* <input className={styles.destination} placeholder="مقصد" /> */}
        <div className={styles.calendar}>
          <DatePicker
            range
            rangeHover
            onChange={dateHandler}
            dateSeparator=" تا "
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom"
            placeholder="تاریخ"
          />
        </div>
      </div>
      <button className={styles.serachBt}>جستوجو</button>
    </form>
    {isLoading && <h3>Loading...</h3>}
    {data && !isPending && <SearchResult data={data} className={styles.result}/> }
    </>
  );
};

export default Search;
