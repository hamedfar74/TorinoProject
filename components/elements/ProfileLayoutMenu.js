"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./ProfileLayoutMenu.module.css";
import { usePathname } from "next/navigation";

const ProfileLayoutMenu = () => {
  const pathName = usePathname()
  console.log(pathName)

  return (
    <div className={styles.container}>
      <ul>
        <li className={pathName === "/profile" ?  styles.active : styles.menuItem}>
          <Link href="/profile">
          <span>
            <Image
              width={16}
              height={16}
              src="/icons/gray-profile.svg"
              alt="profile-icon"
            />
          </span>

          پروفایل من
          
          </Link>
        </li>
        <li className={pathName === "/profile/my-tours" ?  styles.active : styles.menuItem}>
          <Link href="/profile/my-tours">
          <span>
            <Image
              width={16}
              height={16}
              src="/icons/sun-fog.svg"
              alt="tour-icon"
            />
          </span>
          تورهای من
          </Link>
        </li>
        <li className={pathName === "/profile/transactions" ?  styles.active : styles.menuItem}>
          <Link href="/profile/transactions">
          <span>
            <Image
              width={16}
              height={16}
              src="/icons/convert-card.svg"
              alt="transaction-icon"
            />
          </span>
          تراکنش ها
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileLayoutMenu;
