
import Image from "next/image";
import styles from "./not-found.module.css";
import Link from "next/link";
export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <Image width={300} height={300} src="/icons/Error-TV.svg" alt="404-pic" />
      <h3>صفحه مورد نظر یافت نشد!</h3>
      <Link href="/">
        <p>بازگشت به صفحه اصلی</p>
      </Link>
    </div>
  );
}
