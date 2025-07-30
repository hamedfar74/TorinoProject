"use client"

import { sp } from "@/utils/numbers"
import styles from "./TransactionCard.module.css"
import { converteDateToFa } from "@/utils/helper"
const TransactionCard = ({data}) => {
  const {amount, createdAt , id } = data
  const date = new Date(createdAt)
  const converted = converteDateToFa(date)
  console.log(converted)
  console.log(date.toISOString())
  return (
    <div className={styles.container}>
      <p>{converted}</p>
      <p>{sp(amount)}</p>
      <p>{id.split("-")[4]}</p>
    </div>
  )
}

export default TransactionCard