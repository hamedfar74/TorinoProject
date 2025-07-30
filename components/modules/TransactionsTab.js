"use client";
import { useGetProfileTransactions } from "@/core/services/queries";
import styles from "./TransactionsTab.module.css";
import TransactionCard from "../elements/TransactionCard";

const TransactionsTab = () => {
  const { data } = useGetProfileTransactions();
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p>تاریخ و ساعت</p>
        <p>مبلغ(تومان)</p>
        <p>شماره سفارش</p>
      </div>
      <div className={styles.card}>
        {data?.data?.map((item) => (
          <TransactionCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsTab;
