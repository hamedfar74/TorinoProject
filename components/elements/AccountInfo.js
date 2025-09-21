"use client";
import { useGetProfileData } from "@/core/services/queries";
import styles from "./AccountInfo.module.css";
import { e2p } from "@/utils/numbers";
import Image from "next/image";
import { useEffect } from "react";
import { validate } from "@/utils/validate";
const AccountInfo = ({
  edit,
  user,
  touch,
  error,
  setError,
  submitHandler,
  emailSectionHandler,
  changeHandler,
  focusHandler,
}) => {
  const { data: fetchedData, isPending } = useGetProfileData();
  useEffect(() => {
    setError(validate(user));
  }, [touch, user]);
  return (
    <div className={styles.contactInfo}>
      <h3>اطلاعات حساب کاربری</h3>
      <div className={styles.webDesign}>
        <div className={styles.mobile}>
          <p>شماره موبایل</p>
          <span>{!isPending && e2p(fetchedData?.data?.mobile)}</span>
        </div>
        {edit.email ? (
          <div className={styles.email}>
            <form
              className={styles.emailInput}
              onSubmit={(e) => submitHandler("email", e)}
            >
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="آدرس ایمیل"
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <button className={styles.emailbutton} type="submit">
                تایید
              </button>
            </form>
            <span>
              {error.email && touch.email && (
                <span className={styles.error}>{error.email}</span>
              )}
            </span>
          </div>
        ) : (
          <div className={styles.emailDetails}>
            <p> ایمیل</p>
            <span>{fetchedData?.data?.email || <p>-</p>}</span>
            <button className={styles.addbtn} onClick={emailSectionHandler}>
              <Image
                width={16}
                height={16}
                src="/icons/edit-2.svg"
                alt="edit-icon"
              />
              افزودن
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
